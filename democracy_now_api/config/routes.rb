Rails.application.routes.draw do
  
  resources :sessions, only: [:create]
  get '/logout', to: 'sessions#logout', as: 'logout'

  resources :users, only: [:create]
end
