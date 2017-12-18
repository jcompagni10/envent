class UpdateDefaultImageScheduleItems < ActiveRecord::Migration[5.1]
  def change
    change_column_default :schedule_items, :img_url, nil
  end
end
