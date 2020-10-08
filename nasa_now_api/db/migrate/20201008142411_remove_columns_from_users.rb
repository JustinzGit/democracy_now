class RemoveColumnsFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :street_address
    remove_column :users, :city
    remove_column :users, :state
    remove_column :users, :zip_code
    remove_column :users, :country
  end
end
