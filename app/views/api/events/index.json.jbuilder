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

views_arr = []

(0...7).to_a.reverse.each do |i|
  views_arr << @views.count(Date.today - i)
end

json.set! :current_events, @events.where("? between start_date and end_date", Date.today).count
if @views
  json.set! :views, views_arr
  json.set! :avg_views, @views.length/@events.length
end

# json.array! @events.each do |event|
#   json.extract! event, :name, :id
# end
