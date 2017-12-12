json.id @event.id
json.name @event.name
json.display_elements do
  json.array! @event.display_elements.sort_by(&:position).pluck(:module)
end

arr = []

if @schedule_items
  json.scheduleItems do
    @schedule_items.each do |schedule_item|
      json.set! schedule_item.id do
        json.partial! 'api/schedule_items/schedule_items', schedule_item: schedule_item
      end
    end
  end

  @schedule_items.each do |item|
    arr << item.id
  end

else
  json.scheduleItems({})
end
    


json.all_ids arr
