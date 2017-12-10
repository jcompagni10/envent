class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    lowercase_tag = params[:id].downcase
    @event = Event.find_by(tag: lowercase_tag)
    if @event
      render :show
    else
      render JSON: {}, status: 404
    end
  end
end
