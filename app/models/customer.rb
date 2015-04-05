class Customer < ActiveRecord::Base
  has_many :invoices

  validates :name, presence: true, uniqueness: true
end
