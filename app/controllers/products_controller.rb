class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: ProductSerializer.new(products).serializable_hash, status: :ok
  end

  def create
    begin
      Product.create!(product_create_params)
      render json: { created: "Product created successfully!"}, status: :ok
    rescue ActionController::ParameterMissing => e
      render json: { error: e }, status: :unprocessable_entity
    end

  end

  private
  def product_create_params
    params.require(:data).permit(:product_name, :description, :original_price, :stock, :weight, :stars, :discount_percentage, :color, product_images: [])
  end
end