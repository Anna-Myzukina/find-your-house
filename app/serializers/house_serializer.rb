class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :dscription

  has_many :favourites
end
