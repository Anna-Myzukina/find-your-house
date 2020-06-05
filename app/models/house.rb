class House < ApplicationRecord
    has_many :favourites

    before_create :house_description

    def house_description
        self.dscription = name.parameterize
    end

    def average_score
        return 0 unless favourites.count.positive?
        
        favourites.average(:score).round(2).to_f
    end
end
