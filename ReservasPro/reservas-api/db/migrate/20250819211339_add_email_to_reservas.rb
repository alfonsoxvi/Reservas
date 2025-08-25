class AddEmailToReservas < ActiveRecord::Migration[7.2]
  def change
    add_column :reservas, :email, :string
  end
end
