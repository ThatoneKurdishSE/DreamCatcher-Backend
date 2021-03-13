class DreamsController < ApplicationController

    def index
        @dreams = Dream.all

        render json: @dreams
    end

    def create
        @dream = Dream.create(
            title: params[:title],
            content: params[:content],
            date: params[:date]
        )
        render json: @dream, status: :created
    end

    def destroy
        @dream = Dream.find(params[:id])
        @dream.destroy

        render "Like it was never even there!"
    end
end
