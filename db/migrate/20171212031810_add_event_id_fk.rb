class AddEventIdFk < ActiveRecord::Migration[5.1]
  def change
    add_column :schedule_items, :event_id, :string, null: false
    add_index :schedule_items, :event_id
  end
end
