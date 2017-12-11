# == Schema Information
#
# Table name: featured_people
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FeaturedPerson < ApplicationRecord

  has_many :schedule_items
end
