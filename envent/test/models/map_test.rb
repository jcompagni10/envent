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

require 'test_helper'

class MapTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
