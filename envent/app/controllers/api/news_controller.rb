class Api::NewsController < ApplicationController
  def index
    event_id = params[:event_id]
    if event_id != 'undefined'
      event = Event.find_by(id:event_id)
      @news = event.news
      @admin = event.creator
    else
      @news = News.all
    end
    render :index
  end

  def show
    @news = News.find(params[:id])
    render :show
  end

  def create
    @news = News.new(news_params)
    @news.event_id = params[:event_id]
    if @news.save
      render :show
    else
      render json: @news.errors.full_messages, status: 422
    end
  end

  def update
    @news = News.find(params[:id])
    if @news.update_attributes(news_params)
      render :show
    else
      render json: @news.errors.full_messages, status: 422
    end
  end

  def destroy
    @news = News.find(params[:id])
    @news.destroy
    render json: {}
  end

  private

  def news_params
    params.require(:news).permit(:title, :message, :img_url, :event_id)
  end
end
