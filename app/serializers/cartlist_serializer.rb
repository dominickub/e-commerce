class CartlistSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :buyer_id
end
