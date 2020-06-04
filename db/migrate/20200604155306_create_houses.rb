class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :image_url
      t.string :dscription

      t.timestamps
    end
  end
end
