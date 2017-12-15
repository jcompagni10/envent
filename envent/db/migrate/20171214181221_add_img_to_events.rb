class AddImgToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :img_url, :string, default: "http://res.cloudinary.com/trwong/image/upload/c_scale,w_600/v1513275248/teemu-paananen-376238_wkqe62.jpg"
  end
end
