Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'posts#index'
  resources :posts do
    collection do
      get 'inquiry'
      get 'reports'
    end
  end

  resources :items do
    collection do
      get 'purchase'
    end
  end
end
