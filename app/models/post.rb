class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  has_many :posts

  validates :user, presence: true
  validates :title, presence: true
end
