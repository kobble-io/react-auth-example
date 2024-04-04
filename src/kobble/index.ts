import { createKobbleClient } from '@kobbleio/auth-spa-js'

export const kobbleClient = createKobbleClient({
  domain: import.meta.env.VITE_KOBBLE_DOMAIN,
  clientId: import.meta.env.VITE_KOBBLE_CLIENT_ID,
  redirectUri: import.meta.env.VITE_KOBBLE_REDIRECT_URI
})