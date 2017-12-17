class MergeEventAndInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :start_date, :date, null: false
    add_column :events, :end_date, :date, null: false
    add_column :events, :location, :string
    add_column :events, :message, :text

    drop_table :infos
  end
end
