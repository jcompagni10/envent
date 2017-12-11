json.id @event.id
json.name @event.name
json.display_elements do
  json.array! @event.display_elements.sort_by(&:position).pluck(:module)
end
