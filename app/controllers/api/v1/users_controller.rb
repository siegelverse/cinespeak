class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, include: [:reviews, :review_comments]
    end 
end
