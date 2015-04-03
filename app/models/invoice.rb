class Invoice < ActiveRecord::Base
  has_many :invoice_row
  belongs_to :customer
end
