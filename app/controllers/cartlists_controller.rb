class CartlistsController < ApplicationController
    
    def purchased_goods
        if @item.seller_id !== @current_user.id
            @item.update!(quantity: @item.quantity - params[:quantity], buyer_id: @current_user.id)
           render json: @item, status: :ok
    end 

    def purchasing_stuff
    @purchased_items = []
        if @item.seller_id !== @current_user.id
             @purchased_items << @cartlist 
        end
        render json: @purchased_items, status: :ok
    end
           
    def cart_items
        @cartlist = Cartlist.all
    end


end
