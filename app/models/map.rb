# == Schema Information
#
# Table name: maps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :integer          not null
#

class Map < ApplicationRecord
  validates :title, :img_url, presence: true

  belongs_to :event,
             primary_key: :id,
             class_name: :Event,
             foreign_key: :event_id
end
