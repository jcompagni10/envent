class Api::ScheduleItemsController < ApplicationController

  def create
    create_params = schedule_item_params
    create_params["event_id"] = params[:event_id]
    @schedule_item = ScheduleItem.new(create_params)
    if @schedule_item.save
      render :show
    else
      render json: @schedule_item.errors.full_messages, status: 422
    end
  end

  def index
    @schedule_items = ScheduleItem.all
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
    p "----------"
    p params.require(:schedule_item).permit(
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
