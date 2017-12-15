json.extract! message, :event_id, :author_id, :body, :author_username
json.set! :posted_time, time_ago_in_words(message.created_at)
