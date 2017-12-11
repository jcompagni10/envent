json.id @event.id
json.name @event.name
json.display_elements @event.display_elements.each do |el|
  json.extract! el, :position, :module
end
