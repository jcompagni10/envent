json.by_id do
  @items.each do |schedule_item|
    json.set! schedule_item.id do
      # json.extract! schedule_item, :id, :title, :start_time, :end_time, :feature_id, :location, :img_url, :description
      json.partial! 'api/schedule_items/schedule_items', schedule_item: schedule_item
    end
  end
end

json.set! :by_time, @items.time_group


arr = @items
        .sort_by { |item| item.created_at }
        .map { |item| item.id }
        .reverse

json.all_ids arr