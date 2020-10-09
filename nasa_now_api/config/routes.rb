Rails.application.routes.draw do
  
  # Session Routes
  resources :sessions, only: [:create]
  get '/logout', to: 'sessions#logout'
  get '/current_login', to: 'sessions#current_login'

  # User Routes
  resources :users, only: [:create]

  # NASA Routes
  get 'nasa/apod/(:date)', to: 'nasa#apod'
  get 'nasa/asteroids', to: 'nasa#asteroids'
end
