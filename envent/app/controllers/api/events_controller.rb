class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(tag: params[:id])
    if @event
      render :show
    else
      render JSON: {}, status: 404
    end
  end
end
