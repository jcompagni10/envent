class ChangeMapDefaultImgValidation < ActiveRecord::Migration[5.1]
  def change
    change_column :maps, :img_url, :string, default: "https://res.cloudinary.com/ejbai31/image/upload/v1513139888/45944_sjwpfv.svg"
  end
end
