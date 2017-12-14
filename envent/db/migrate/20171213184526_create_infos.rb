class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.date :start_date
      t.date :end_date
      t.string :location
      t.text :message
      t.integer :event_id

      t.timestamps
    end

    add_index :infos, :event_id
  end
end
