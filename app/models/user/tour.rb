class User::Tour
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :user
  belongs_to :tour
end