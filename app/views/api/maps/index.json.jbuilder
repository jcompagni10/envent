if @map
  json.extract! @map, :id, :title, :img_url, :event_id
end
