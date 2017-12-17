class CreateDisplayElements < ActiveRecord::Migration[5.1]
  def change
    create_table :display_elements do |t|
      t.integer :event_id, presence: true
      t.integer :position, presence: true
      t.string :module, presence: true

      t.timestamps
    end
  end
end
