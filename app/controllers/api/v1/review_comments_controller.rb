class Api::V1::ReviewCommentsController < ApplicationController
    def index 
        review_comments = ReviewComment.all 
        render json: review_comments
    end 
end
