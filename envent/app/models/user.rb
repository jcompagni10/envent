class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true

  has_many :events

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token
    self.session_token = generate_session_token
    save
    session_token
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(email: credentials[:email])
    return user if user && user.is_password?(credentials[:password])
  end


  private

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

end
