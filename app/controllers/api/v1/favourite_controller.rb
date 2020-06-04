module Api
    module v1
        class FavouriteController < ApplicationController


            private

            def favourite_params
                params.require(:favourite).permit(:title, :description, :score, :house_id)
            end
        end
    end
end