json.by_id do
  @schedule_items.each do |schedule_item|
    json.set! schedule_item.id do
      # json.extract! schedule_item, :id, :title, :start_time, :end_time, :feature_id, :location, :img_url, :description
      json.partial! 'api/schedule_items/schedule_items', schedule_item: schedule_item
    end
  end
end

arr = []
@schedule_items.each do |item|
  arr << item.id
end

json.all_ids arr
