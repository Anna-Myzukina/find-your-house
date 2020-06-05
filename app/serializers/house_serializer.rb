class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :dscription, :average_score

  has_many :favourites
end
