Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: JSON } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :events, only: [:index, :show, :create] do
      resources :schedule_items, only: [:index, :create, :update]
      resources :maps, only: [:show, :destroy]
    end
    resources :schedule_items, only: [:show, :destroy]
    resources :maps, only: [:create, :show, :destroy]
    resources :news, only: [:create, :index, :update]
    get 'events/show_id/:id', :to => 'events#show_id'
  end
end
