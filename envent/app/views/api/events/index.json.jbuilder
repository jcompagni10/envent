json.array! @events.each do |event|
  json.extract! event, :name, :id
end
