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
#  event_id    :string           not null
#

class ScheduleItem < ApplicationRecord
  validates :title, :start_time, :end_time, presence: true

  belongs_to :featured_person,
    foreign_key: :feature_id,
    class_name: :FeaturedPerson,
    optional: true

  belongs_to :event

  before_save :ensure_image

  def ensure_image
    self.img_url = "https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg"
  end
end
