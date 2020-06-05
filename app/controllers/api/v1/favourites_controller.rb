module Api
    module V1
        class FavouritesController < ApplicationController
        protect_from_forgery with: :null_session

        def create
            favourite = Favourite.new(favourite_params)

            if favourite.save
                render json: FavouriteSerializer.new(favourite).serialized_json
            else
                render json: { error: favourite.errors.messages }, status: 422
            end
        end

        def destroy
            favourite = Favourite.find(params[:id])

            if favourite.destroy
                head :no_content
            else
                render json: { error: favourite.errors.messages }, status: 422
            end
        end

            private

            def favourite_params
                params.require(:favourite).permit(:title, :description, :score, :house_id)
            end
        end
    end
end