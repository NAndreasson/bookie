class InvoicesController < ApplicationController
  before_action :set_invoice, only: [:show, :edit, :update, :destroy, :pdf]

  # GET /invoices
  # GET /invoices.json
  def index
    @invoices = Invoice.all
  end

  # GET /invoices/1
  # GET /invoices/1.json
  def show
  end

  # GET /invoices/new
  def new
    @invoice = Invoice.new
  end

  # GET /invoices/1/edit
  def edit
  end

  # POST /invoices
  # POST /invoices.json
  def create
    @invoice = Invoice.new(invoice_params.merge(invoice_date: Date.current))

    rowsParam = params[:invoice][:invoice_rows]
    rows = rowsParam.map do |row|
      data = row[1]
      { desc: data[:desc], units: data[:units], price: data[:price] }
    end

    respond_to do |format|
      if @invoice.save

        rows.each do |row|
          @invoice.invoice_row.create(row)
        end

        format.html { redirect_to @invoice, notice: 'Invoice was successfully created.' }
        format.json { render :show, status: :created, location: @invoice }
      else
        format.html { render :new }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /invoices/1
  # PATCH/PUT /invoices/1.json
  def update
    respond_to do |format|
      if @invoice.update(invoice_params)
        format.html { redirect_to @invoice, notice: 'Invoice was successfully updated.' }
        format.json { render :show, status: :ok, location: @invoice }
      else
        format.html { render :edit }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /invoices/1
  # DELETE /invoices/1.json
  def destroy
    @invoice.destroy
    respond_to do |format|
      format.html { redirect_to invoices_url, notice: 'Invoice was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # PDF /invoices/1/pdf
  def pdf
    send_data generate_pdf(@invoice),
      filename: "#{@invoice.customer}.pdf",
      type: "application/pdf"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice
      @invoice = Invoice.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def invoice_params
      params.require(:invoice).permit(:customer, :invoice_date, :last_pay_date)
    end

    def generate_pdf(invoice)
      Prawn::Document.new do
        text "FAKTURA", :size => 18

        text "Kund: #{invoice.customer}"
        text "Fakturadatum: #{invoice.invoice_date} Förfallodatum: #{invoice.last_pay_date}"
        text "Dröjsmålsränta: Enligt lag"

        move_down 10

        text "Faktura-detaljer", :style => :bold_italic
        stroke_horizontal_rule

        move_down 10

        invoice.invoice_row.each do |row|
          text "Beskrivning: #{row.desc}"
          text "Timmar: #{row.units}"
          text "Pris: #{row.price}"
        end


      end.render
    end
end
