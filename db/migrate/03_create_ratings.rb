class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :rating, optional: true
      t.text :comment, optional: true
      t.integer :item_id
      t.references :seller, foreign_key: { to_table: 'users' }
      t.references :buyer, foreign_key: { to_table: 'users' }


      t.timestamps
    end
  end
end
