class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :street
      t.string :postnr
      t.string :city

      t.timestamps null: false
    end

    add_index :customers, :name, unique: true
  end
end
