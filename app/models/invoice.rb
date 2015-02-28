class Invoice < ActiveRecord::Base
  has_many :invoice_row
end
