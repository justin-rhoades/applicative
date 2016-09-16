Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :annotations, only: [:create, :show]
    resources :queries, only: [:create, :index, :show, :destroy]
    resources :events, only: [:index]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end
