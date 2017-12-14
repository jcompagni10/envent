class Message < ApplicationRecord
  validates :event_id, :author_id, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :event,
    class_name: :Event,
    foreign_key: :event_id,
    primary_key: :id
  
end
