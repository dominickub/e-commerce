# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Rating.destroy_all
Item.destroy_all
Cartlist.destroy_all

user1 = User.create( username: "Dom", email: "dom@flatiron.com", password: "12345", password_confirmation: "12345")
user2 = User.create( username: "Pema", email: "pema@flatiron.com", password: "2345", password_confirmation: "2345")

item1 = Item.create( name: "one punch man", description: "funny figure", price: 10, quantity: 1, image: "https://m.media-amazon.com/images/I/71K9Zjuj-fL._AC_SY606_.jpg", seller_id: user2.id)

rating1 = Rating.create( rating: 10, comment: "Awesome product",seller_id: user2.id, buyer_id: user1.id, item_id: item1.id)

cart1 = Cartlist.create(buyer_id: user2.id, item_id: item1.id)

50.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Food.description,
      price: Faker::Commerce.price(range: 0..10.0, as_string: true),
      quantity: 1,
      image: Faker::Avatar.image,
      category: Faker::Commerce.department(max: 5),
      seller_id: user2.id,
    )
  end