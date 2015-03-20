module InvoicesHelper

  def total_price(price, units)
    number_to_currency(price * units)
  end

  def sum_rows_total(rows)
    total = 0

    rows.each do |row|
      total += row.units * row.price
    end

    number_to_currency(total)
  end

  def calc_tax(rows)
    total = 0

    rows.each do |row|
      total += row.units * row.price
    end


    number_to_currency(total * 0.25)
  end

  def sum_total(rows)
    total = 0

    rows.each do |row|
      total += row.units * row.price
    end

    number_to_currency(total * 1.25)
  end

end
