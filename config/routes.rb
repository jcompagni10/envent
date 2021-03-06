Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: JSON } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :events, only: [:index, :show, :create, :update] do
      resources :schedule_items, only: [:index, :create, :update]
      resources :maps, only: [:create, :show, :update]
      resources :news, only: [:create, :index]
      resources :info, only: [:create, :show, :update]
      resources :messages, only: [:create, :index]
      resources :maps, only: [:index, :create, :show, :update]

    end
    # resources :messages, only: [:show, :update, :delete]
    # resources :news, only: [:show, :destroy, :update]
    # resources :schedule_items, only: [:show, :destroy]
    # resources :maps, only: [:create, :show, :destroy]
    # resources :news, only: [:create, :index, :update]
    # get 'events/show_id/:id', :to => 'events#show_id'
  end
end
