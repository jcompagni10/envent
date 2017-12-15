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
    userId = params[:userId]
    if userId
      @events = User.find(userId).events
    else
      @events = Event.all
    end
    render :index
  end

  def show
    id = params[:id]
    if id == id.to_i.to_s
      @event = Event.find(id)
    else
      lowercase_tag = params[:id].downcase
      @event = Event.find_by(tag: lowercase_tag)
    end

    @scheduleItems = ScheduleItem.find_by(event_id: @event.id)
    
    if @event
      render :show
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  def show_id
    @event = Event.find(params[:id])
    if @event
      render :show
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :tag, :modules, :start_date, :end_date, :message, :location, :img_url)
  end
end
