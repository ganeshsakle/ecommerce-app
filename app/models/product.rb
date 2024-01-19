class Product < ApplicationRecord
  @@count = 1
  has_many_attached :product_images
  before_save :set_product_price
  after_create :set_sku
  validates :discount_percentage, length: { in: 1..100 }

  private
  def set_product_price
    self.price = product_price
    # save! - infinite
  end

  def set_sku
    @@count += 1
    self.sku = "EC#{@@count}"
  end

  def product_price
    self.original_price - ((self.discount_percentage * self.original_price)/100)
  end
end
