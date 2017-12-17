class Api::ScheduleItemsController < ApplicationController

  def create
    # create_params = schedule_item_params
    # create_params["event_id"] = params[:event_id]
    @schedule_item = ScheduleItem.new(schedule_item_params)
    @schedule_item.event_id = params[:event_id]
    feature = FeaturedPerson.find_or_create_by(name:
      params[:schedule_item][:feature_name])
    @schedule_item.featured_person = feature
    if @schedule_item.save
      render :show
    else
      render json: @schedule_item.errors.full_messages, status: 422
    end
  end

  def index
    event_id = params[:event_id]
    if event_id == "undefined"
      @items = ScheduleItem.all
    elsif event_id == event_id.to_i.to_s
      # find by event_id
      @items = Event.find_by(id: event_id).schedule_items
    else
      # find by event tag
      @items = Event.find_by(tag: event_id).schedule_items
    end
    render :index
  end

  def show
    @schedule_item = ScheduleItem.find(params[:id])
    render :show
  end

  def update
    @schedule_item = ScheduleItem.find(params[:id])
    if @schedule_item.update_attributes(schedule_item_params)
      render :show
    else
      render json: @schedule_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @schedule_item = ScheduleItem.find(params[:id])
    @schedule_item.destroy
    render json: {}
  end

  private

  def schedule_item_params
    params.require(:schedule_item).permit(
      :title,
      :start_time,
      :end_time,
      :feature_id,
      :location,
      :img_url,
      :description,
      :event_id
    )
  end
end
