Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: JSON } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :events, only: [:index, :show, :create]
    resources :schedule_items, only: [:index, :show, :create, :destroy, :update]
    resources :maps, only: [:create, :show, :destroy]
  end
end
