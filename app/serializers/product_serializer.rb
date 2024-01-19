class ProductSerializer
  include Rails.application.routes.url_helpers
  include JSONAPI::Serializer
  attributes :id, :product_name, :description, :original_price, :price, :stock, :weight, :stars, :discount_percentage, :color, :sku

  attribute :product_images do |object, params|
    if object.product_images.attached?
      array = []
      host = params[:host] || 'http://localhost:300'
      object.product_images.each do |product_image|
        array << host + Rails.application.routes.url_helpers.rails_blob_path(product_image, only_path: true)
        # array << Rails.application.routes.url_helpers.rails_blob_path(product_image, only_path: true)
      end
      array
    end
  end
end

