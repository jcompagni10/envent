# == Schema Information
#
# Table name: news
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  message    :text
#  img_url    :string
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class News < ApplicationRecord
  validates :title, :event_id, presence: true

  belongs_to :event
  
end
