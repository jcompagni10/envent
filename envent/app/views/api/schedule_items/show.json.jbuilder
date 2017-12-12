# json.extract! @schedule_item, :id, :title, :start_time, :end_time, :feature_id, :location, :img_url, :description, :event_id

json.partial! 'api/schedule_items/schedule_items', schedule_item: @schedule_item