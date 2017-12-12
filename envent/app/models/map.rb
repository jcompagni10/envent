# == Schema Information
#
# Table name: maps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Map < ApplicationRecord
  validates :title, :img_url, presence: true
end
