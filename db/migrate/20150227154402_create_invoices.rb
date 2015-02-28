class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.string :customer, null: false

      # many rows

      t.date :invoice_date, null: false
      t.date :last_pay_date, null: false

      t.timestamps null: false
    end
  end
end
