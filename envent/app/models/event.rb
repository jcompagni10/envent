# Schema Information
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

class Event < ApplicationRecord
  # TODO: add uniquness validate to DB
  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
  before_save :downcase_fields


  belongs_to :creator,
             class_name: :User,
             foreign_key: :user_id

  has_many :messages,
    class_name: :Message,
    foreign_key: :event_id,
    primary_key: :id

  has_many :event_views
  has_many :display_elements
  has_many :schedule_items do
    def time_group
      times = {}
      self.group_by(&:start_time).each do |time, events|
        date = time.strftime("%A, %b %d")
        unless times[date]
          times[date] = {}
        end
        time_str = time.strftime("%I:%M %p")
        times[date][time_str] = events.pluck(:id)
      end
      times
    end
  end

  has_one :map
  has_many :news
  has_one :info

  def downcase_fields
    self.tag.downcase!
  end

end
