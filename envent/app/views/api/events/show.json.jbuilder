json.name @event.name
json.modules @event.modules.each do |mod|
  json.extract! mod, :position, :module
end
