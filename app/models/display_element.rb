# == Schema Information
#
# Table name: display_elements
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  position   :integer
#  module     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DisplayElement < ApplicationRecord

  belongs_to :event
end
