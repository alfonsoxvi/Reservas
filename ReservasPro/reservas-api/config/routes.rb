Rails.application.routes.draw do
  resources :reservas, only: [:index, :new, :create]
  root "reservas#index"
end

