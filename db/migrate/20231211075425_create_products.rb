class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price
      t.float :original_price, null: false
      t.integer :stock, null: false
      t.float :weight
      t.float :stars
      t.float :discount_percentage, null: false
      t.string :color
      t.string :sku

      t.timestamps
    end
  end
end
