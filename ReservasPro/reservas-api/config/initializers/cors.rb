Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://reservas-1.onrender.com'  # tu frontend React
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

