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

  before_save :ensure_image#, :parse_times

  def ensure_image
    self.img_url ||= "https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg"
  end

  def parse_times
    self.parsed_start = self.start_time.strftime("%b %e %l:%M%P")
    self.parsed_end = self.end_time.strftime("%b %e %l:%M%P")
  end
  
  # def start_time=(start_time)
  #   self.start_time = start_time
  #   self.parsed_start = start_time.strftime("%b %e %l:%M%P")
  # end

  # def end_time=(end_time)
  #   self.end_time = end_time
  #   self.parsed_end = end_time.strftime("%b %e %l:%M%P")
  # end
end
