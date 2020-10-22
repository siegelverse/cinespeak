class Api::V1::MoviesController < ApplicationController
    def index 
        movies = Movie.all 
        render json: movies, include: [:reviews]
    end 
end
