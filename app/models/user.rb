class User < ApplicationRecord
    has_many :ratings, class_name: 'Rating', foreign_key: 'seller_id', dependent: :nullify
    has_many :purchased_item, class_name: 'Item', foreign_key: 'buyer_id', through: :ratings
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id',  dependent: :destroy
    has_secure_password

    has_one :cart_list

    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
