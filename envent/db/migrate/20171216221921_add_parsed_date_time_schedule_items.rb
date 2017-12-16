class AddParsedDateTimeScheduleItems < ActiveRecord::Migration[5.1]
  def change
    add_column :schedule_items, :parsed_start, :string
    add_column :schedule_items, :parsed_end, :string
  end
end
