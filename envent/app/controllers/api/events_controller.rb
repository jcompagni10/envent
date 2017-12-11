class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.creator = current_user
    if @event.save
      params[:event][:modules].each_with_index do |mod, position|
        @event.display_elements.create({module: mod, position: position})
      end
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

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

  private
    def event_params
      params.require(:event).permit(:name, :tag)
    end
end
