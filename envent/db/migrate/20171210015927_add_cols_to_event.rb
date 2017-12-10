class AddColsToEvent < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :tag, :string, null: false, unique: true
    add_column :events, :user_id, :integer, null: false
    add_column :events, :private, :boolean, null: false, default: false
    add_column :events, :password, :string
  end
end
