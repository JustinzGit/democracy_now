Rails.application.routes.draw do
  
  resources :sessions, only: [:create]
  get '/logout', to: 'sessions#logout'
  get '/current_login', to: 'sessions#current_login'

  resources :users, only: [:create]
end
