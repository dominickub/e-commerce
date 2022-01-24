class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :item_id, :seller_id, :buyer_id
end
