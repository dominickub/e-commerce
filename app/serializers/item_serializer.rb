class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :quantity, :category, :image, :seller_id, :buyer_ids
end
