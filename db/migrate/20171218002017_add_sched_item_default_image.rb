class AddSchedItemDefaultImage < ActiveRecord::Migration[5.1]
  def change
    change_column_default :schedule_items, :img_url, "https://res.cloudinary.com/trwong/image/upload/v1513556303/images_ihp6q1.png"
  end
end
