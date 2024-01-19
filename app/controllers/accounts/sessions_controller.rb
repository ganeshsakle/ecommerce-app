# frozen_string_literal: true

class Accounts::SessionsController < Devise::SessionsController
  respond_to :json

  private
    def respond_with(current_user, _opts = {})
      render json: {
        status: {
          code: 200, message: 'Logged in successfully.',
          data: { account: AccountSerializer.new(current_user).serializable_hash[:data][:attributes] }
        }
      }, status: :ok
    end
    def respond_to_on_destroy
      if request.headers['Authorization'].present?
        jwt_payload = JWT.decode(request.headers['Authorization'].split(' ').last, "3476c8a467faacb319c62288f1d16f5df73fca466d20f19daa49d4b1268570b592700903e1c8aac8abc66b6c4763d30a1bb5931e5c36691bbcfe4a24e53f1692").first # Rails.application.credentials.devise_jwt_secret_key!).first
        current_user = Account.find(jwt_payload['sub'])
      end

      if current_user
        render json: {
          status: 200,
          message: 'Logged out successfully.'
        }, status: :ok
      else
        render json: {
          status: 401,
          message: "Couldn't find an active session."
        }, status: :unauthorized
      end
    end
  end
