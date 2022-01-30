Rails.application.routes.draw do
  
  resources :users
  resources :ratings
  resources :items
  resources :cartlists
  post '/login',to: 'sessions#create'
   patch '/purchase', to: 'items#purchased_item'
   get '/me', to: 'users#show'
   get 'purchasing_stuff', to: 'cartlists#purchasing_stuff'
   delete '/items/item.id', to: 'items#destroy'
   get '/items', to: 'items#index'
   post '/users', to: 'users#create'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
