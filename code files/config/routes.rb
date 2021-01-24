Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/tasks', to: 'tasks#index'
      post '/tasks', to: 'tasks#create'
      get '/tasks/:id', to: 'tasks#show'
      patch '/tasks/:id', to: 'tasks#update'
      delete '/tasks/:id', to: 'tasks#destroy'
      # resources :tasks
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
