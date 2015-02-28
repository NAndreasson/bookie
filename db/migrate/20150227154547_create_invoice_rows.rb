class CreateInvoiceRows < ActiveRecord::Migration
  def change
    create_table :invoice_rows do |t|
      t.belongs_to :invoice, index: true

      t.string :desc
      t.integer :units, null: false
      t.integer :price, null: false

      t.timestamps null: false
    end
  end
end
