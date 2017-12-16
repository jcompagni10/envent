class ChangeEventDefaultImage < ActiveRecord::Migration[5.1]
  def change
    change_column_default :events, :img_url, "https://res.cloudinary.com/trwong/image/upload/c_scale,w_600/v1513275248/teemu-paananen-376238_wkqe62.jpg"
  end
end
