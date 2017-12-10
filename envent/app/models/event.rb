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

class Event < ApplicationRecord
  # TODO: add uniquness validate to DB
  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
  before_save :downcase_fields


  belongs_to :creator,
             class_name: :User,
             foreign_key: :user_id

  has_many :display_elements

  def downcase_fields
    self.tag.downcase!
  end

end
