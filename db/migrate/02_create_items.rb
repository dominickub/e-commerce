class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.integer :quantity
      t.string :category
      t.string :image
      t.references :buyer_id, foreign_key: { to_table: 'users' }, optional: true
      t.references :seller, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
