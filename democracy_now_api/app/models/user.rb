class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true

    validates :password, presence: true, confirmation: true, length: {in: 8..15}
    validates :password_confirmation, presence: true
end
