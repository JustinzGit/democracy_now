class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true

    validates :password, length: {in: 8..15}
end
