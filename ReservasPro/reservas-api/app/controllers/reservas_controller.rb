class ReservasController < ApplicationController
  # Asegúrate de permitir que Rails maneje JSON
  protect_from_forgery with: :null_session

  def index
    @reservas = Reserva.all
    render json: @reservas
  end

  
def create
  @reserva = Reserva.new(reserva_params)
  if @reserva.save
    render json: { message: "Reserva creada con éxito" }, status: :created
  else
    render json: { errors: @reserva.errors.full_messages }, status: :unprocessable_entity
  end
end


  private

  

def reserva_params
  params.require(:reserva).permit(:nombre, :personas, :fecha, :hora, :telefono, :email)
end

end

