json.by_id do
  @events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end

arr = @events
        .sort_by { |event| event.updated_at }
        .map { |event| event.id }
        .reverse

json.all_ids arr

# json.array! @events.each do |event|
#   json.extract! event, :name, :id
# end
