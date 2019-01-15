Rails.application.routes.draw do
  root 'store#index'
  resources :charges, only: [:create]
end
