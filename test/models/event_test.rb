# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tag        :string           not null
#  user_id    :integer          not null
#  private    :boolean          default(FALSE), not null
#  password   :string
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
