class ToursController < ApplicationController

    def index
        @tours = Tour.all
    end

    def new
        @tour = Tour.new
    end

    def show
        @tour = Tour.find(params[:id])
    end

    def edit
    end

    def create
        @tour = Tour.new(tour_params)
        @tour.user = current_user

        if @tour.save
            redirect_to @tour
        else
            render :new, status: :unprocessable_entity
        end        
    end
    
    def update
    end

    def destroy
    end


    private

    def tour_params
        params.fetch(:tour, {}).permit(:name, :description)
    end
end
