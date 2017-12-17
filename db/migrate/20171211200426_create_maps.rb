class CreateMaps < ActiveRecord::Migration[5.1]
  def change
    create_table :maps do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.timestamps
    end
  end
end
