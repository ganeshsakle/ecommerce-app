class Account < ApplicationRecord
  rolify
  include Devise::JWT::RevocationStrategies::JTIMatcher
  after_create :assign_default_role

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :validatable, :jwt_authenticatable,
         jwt_revocation_strategy: self

  # validates :roles, presence: true
  def assign_default_role
    self.add_role(:customer) if self.roles.blank?
  end
end
