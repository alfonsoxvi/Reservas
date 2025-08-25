class ApplicationController < ActionController::Base
  # Habilitar sesiones para flash
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception
end

