json.extract! event, :id, :name, :tag, :private, :img_url
json.set! :last_edit, time_ago_in_words(event.updated_at)
json.set! :views, event.event_views.count
