Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :welcome, :searches, :only => [:index]
  root 'searches#index'
  get 'searches/sort', :to => 'searches#sort'
end
