
class ItemsController < ApplicationController
    before_action :find_item, only: [:destroy,:update,:purchased_item]
    skip_before_action :authenticate_user, only: [:create,:update,:index,:purchased_item, :destroy,:show]
      def create
          item = Item.create!(items_params)
          render json: item, status: :created
      end 
  
      def destroy
          if @item.seller_id == @current_user.id
              @item.destroy
          end
      end
  
     
      def index 
        item = Item.all
        render json: item, include: :user
      end
  
      def update
          #if @item.seller_id == @current_user.id
              @item.update!(items_params)
          #end
      end

      def show 
        item = Item.find_by(id: params[:id])
        if item 
            render json: item, status: :ok
        else 
            render json: "item not found", status: :not_found
        end 
    end

      
      def purchased_item
          if @item.seller_id != @current_user.id 
             @item.update!(quantity: @item.quantity - params[:quantity], buyer_id: @current_user.id)
             render json: @item, status: :ok
          end
      end 
  
      private 
  
      def items_params
          params.permit(:name, :description, :price, :sold, :quantity, :image, :seller_id,:buyer_id)
      end
  end   
  