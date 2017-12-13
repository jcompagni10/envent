class News < ApplicationRecord
  validates :title, :event_id, presence: true

  belongs_to :event
  
end
