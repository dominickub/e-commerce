class RatingsController < ApplicationController
    before_action :find_item, only: [:create,:update]
    before_action :find_rating, only: [:destroy,:update]
    skip_before_action :authenticate_user, only: :create


    def create
        # if @item.buyer_id == @current_user.id
        rating = Rating.create!(ratings_params)
        render json: rating, status: :created
        # end 
    end

    def update
        # if @item.buyer_id == @current_user.id 
            @rating.update!(ratings_params)
        # end 
    end

    def destroy
        if @item.buyer_id == @current_user.id 
            @rating.destroy
        end
    end

    private
  
    def ratings_params
        params.permit(:rating, :comment, :item_id, :seller_id, :buyer_id)
    end

end
