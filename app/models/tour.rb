class Tour
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :description, type: String

  belongs_to :creator, class_name: "User"

  validates :name, presence: true
  validates :description, presence: true
end
