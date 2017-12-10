# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
  # TODO: add uniquness validate to DB
  validates :name, presence: true, uniqueness: true

  has_many :display_elements
end
