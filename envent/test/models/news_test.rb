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

require 'test_helper'

class NewsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
