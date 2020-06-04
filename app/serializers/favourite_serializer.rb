class FavouriteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :house_id
end
