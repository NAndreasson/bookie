class Invoice < ActiveRecord::Base
  has_many :invoice_row
  belongs_to :customer

  def as_json(options={})
    super( :include => [
      :invoice_row
    ])
  end

end
