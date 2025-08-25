class CreateReservas < ActiveRecord::Migration[7.2]
  def change
    create_table :reservas do |t|
      t.string :nombre
      t.integer :personas
      t.date :fecha
      t.time :hora
      t.string :telefono

      t.timestamps
    end
  end
end
