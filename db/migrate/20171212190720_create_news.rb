class CreateNews < ActiveRecord::Migration[5.1]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.text :message
      t.string :img_url
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :news, :event_id
  end
end
