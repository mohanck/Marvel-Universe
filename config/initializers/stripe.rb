# Test Stripe API Keys
Rails.configuration.stripe = {
  publishable_key: 'pk_test_zOBseCq2J4pdNWaHqkEwOmv1',
  secret_key: 'sk_test_AmHYQbGPRVT6MfGrXlY4NrY6'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
