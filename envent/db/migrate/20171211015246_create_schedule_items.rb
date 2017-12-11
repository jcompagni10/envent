class CreateScheduleItems < ActiveRecord::Migration[5.1]
  def change
    create_table :schedule_items do |t|
      t.string :title, null: false, index: true
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.integer :feature_id
      t.string :location
      t.string :img_url
      t.text :description
      t.timestamps
    end
  end
end
