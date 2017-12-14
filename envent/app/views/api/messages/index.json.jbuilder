json.by_id do
  @messages.each do |message|
    json.set! message.id do
      # json.extract! schedule_item, :id, :title, :start_time, :end_time, :feature_id, :location, :img_url, :description
      json.partial! 'api/messages/message', message: message
    end
  end
end

message = @messages
            .sort_by{ |message| message.updated_at }
            .map { |message| message.id }

json.all_ids message