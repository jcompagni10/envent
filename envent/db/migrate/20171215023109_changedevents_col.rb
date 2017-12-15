class ChangedeventsCol < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :start_date, :date, null: false
    change_column :events, :end_date, :date, null: false
  end
end
