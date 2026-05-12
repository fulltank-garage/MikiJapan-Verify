import type { LineIdentity } from '../lib/liff'

export type RegisteredMember = {
  id?: string
  status?: 'pending' | 'approved' | 'rejected' | string
}

const devApiBaseUrl = 'http://localhost:8080/api'

const getApiBaseUrl = () => {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()
  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(/\/+$/, '')
  }

  if (import.meta.env.DEV) {
    return devApiBaseUrl
  }

  throw new Error('Missing VITE_API_BASE_URL for production build')
}

const getLineHeaders = (lineIdentity?: LineIdentity) => {
  const headers: Record<string, string> = {}

  if (lineIdentity?.lineUserId) {
    headers['X-Line-User-Id'] = lineIdentity.lineUserId
  }
  if (lineIdentity?.lineIdToken) {
    headers['X-Line-ID-Token'] = lineIdentity.lineIdToken
  }
  if (lineIdentity?.lineDisplayName) {
    headers['X-Line-Display-Name'] = lineIdentity.lineDisplayName
  }
  if (lineIdentity?.linePictureUrl) {
    headers['X-Line-Picture-Url'] = lineIdentity.linePictureUrl
  }

  return headers
}

export const getRegisteredMember = async (lineIdentity?: LineIdentity) => {
  const response = await fetch(`${getApiBaseUrl()}/auth/registration-status`, {
    headers: getLineHeaders(lineIdentity),
  })

  if (!response.ok) {
    throw new Error(`Registration status request failed: ${response.status}`)
  }

  return response.json() as Promise<RegisteredMember>
}
