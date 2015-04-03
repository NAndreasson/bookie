class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.belongs_to :customer, index: true

      # many rows

      t.date :invoice_date, null: false
      t.date :last_pay_date, null: false

      t.timestamps null: false
    end
  end
end
