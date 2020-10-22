class Review < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    has_many :review_comments
end
