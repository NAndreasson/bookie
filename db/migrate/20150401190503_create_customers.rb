class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :street
      t.string :postnr
      t.string :city

      t.timestamps null: false
    end
  end
end
