json.extract! news, :id, :title, :message, :img_url, :event_id
json.set! :posted_time, time_ago_in_words(news.created_at)
