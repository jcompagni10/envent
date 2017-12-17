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

  DEFAULT_IMAGES = %w[
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394909/unsplash_5252bb51404f8_1_bizffe.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394908/photo-1501837303764-ada599fdac6c_asqit3.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394906/photo-1491339526372-c7112c8e37f3_xsq8zu.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394905/photo-1493225457124-a3eb161ffa5f_tf51er.jpg
    https://res.cloudinary.com/trwong/image/upload/v1513394903/60147231_gim7mq.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395305/photo-1501716702726-40703eebd722_fg2dv0.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395304/photo-1460723237483-7a6dc9d0b212_r4j5zw.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395303/photo-1466253985008-19ae27987e03_vjeoz6.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395302/photo-1468231300737-ecd13d75ce6f_eupzhf.jpg
    https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395301/photo-1507768526132-531921c1177a_ccrbci.jpg
    https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg
  ]
  def ensure_image
    self.img_url = DEFAULT_IMAGES[ScheduleItem.count % 11]
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
