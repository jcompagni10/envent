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
if @views
  json.set! :views, @views
  json.set! :avg_views, @views.length/@events.length
end
# json.array! @events.each do |event|
#   json.extract! event, :name, :id
# end
