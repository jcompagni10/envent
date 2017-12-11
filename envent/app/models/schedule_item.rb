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

class ScheduleItem < ApplicationRecord
  validates :title, :start_time, :end_time, presence: true

  # belongs_to :featured_people,
  #            class_name: :FeaturedPerson,
  #            foreign_key: :feature_id
end
