class AddEventIdToMaps < ActiveRecord::Migration[5.1]
  def change
    add_column :maps, :event_id, :integer, null: false, index: true
  end
end
