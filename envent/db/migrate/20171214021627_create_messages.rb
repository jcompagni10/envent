class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :event_id, presence: true
      t.integer :author_id, presence: true
      t.text :body, presence: true

      t.timestamps
    end
    add_index :messages, :event_id
    add_index :messages, :author_id
  end
end
