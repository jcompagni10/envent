# == Schema Information
#
# Table name: display_elements
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  position   :integer
#  type       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class DisplayElementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
