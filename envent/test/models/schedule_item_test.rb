# == Schema Information
#
# Table name: schedule_items
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  start_time  :datetime         not null
#  end_time    :datetime         not null
#  feature_id  :integer
#  location    :string
#  img_url     :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ScheduleItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
