Rails.application.routes.draw do
  devise_for :users,
  :path => "",
  :path_names => {
      :sign_in  => "login",
      :sign_out => "logout",
      :sign_up  => "register",
      :password => "password",
      :confirmation => "confirmation"
  },
  :controllers => {
      :registrations => "users/registrations",
      :confirmations => "users/confirmations",
      :passwords => "users/passwords",
      :sessions => "users/sessions",
  }

  resources :tours

  unauthenticated :user do
    root to: "websites#home", as: :unauthenticated_user
    get :how_it_works, to: "websites#how_it_works"
  end

  authenticated :user do
    root to: "dashboards#show", as: :authenticated_user
    # get :how_it_works, to: "websites#how_it_works"
  end
end
