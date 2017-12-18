class ChangeFeatureToStr < ActiveRecord::Migration[5.1]
  def change
    change_column :schedule_items, :feature_id, :string
  end
end
