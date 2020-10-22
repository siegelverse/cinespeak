class User < ApplicationRecord
    has_many :reviews
    has_many :review_comments, :through => :reviews 
    has_many :review_comments
end
