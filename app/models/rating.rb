class Rating < ApplicationRecord
    belongs_to :seller, class_name: "User", foreign_key: "seller_id"
    belongs_to :buyer, class_name: "User", foreign_key: "buyer_id"
    belongs_to :item

    validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 10}
end
