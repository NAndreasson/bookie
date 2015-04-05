# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150401190503) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "street"
    t.string   "postnr"
    t.string   "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "customers", ["name"], name: "index_customers_on_name", unique: true, using: :btree

  create_table "invoice_rows", force: :cascade do |t|
    t.integer  "invoice_id"
    t.string   "desc"
    t.integer  "units",      null: false
    t.integer  "price",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "invoice_rows", ["invoice_id"], name: "index_invoice_rows_on_invoice_id", using: :btree

  create_table "invoices", force: :cascade do |t|
    t.integer  "customer_id"
    t.date     "invoice_date",  null: false
    t.date     "last_pay_date", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "invoices", ["customer_id"], name: "index_invoices_on_customer_id", using: :btree

end
