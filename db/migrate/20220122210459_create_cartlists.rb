class CreateCartlists < ActiveRecord::Migration[6.1]
  def change
    create_table :cartlists do |t|
      t.integer :item_id
      t.integer :buyer_id

      t.timestamps
    end
  end
end
