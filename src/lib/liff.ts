import liff from '@line/liff'

export type LineIdentity = {
  lineUserId?: string
  lineIdToken?: string
  lineDisplayName?: string
  linePictureUrl?: string
}

class LiffLoginRedirectError extends Error {
  constructor() {
    super('Redirecting to LINE login')
    this.name = 'LiffLoginRedirectError'
  }
}

let initPromise: Promise<void> | null = null

const defaultVerifyLiffId = '2010003223-1GN7XrfD'
const defaultProfileLiffId = '2010003223-KfDmnya6'
const getLiffId = () =>
  import.meta.env.VITE_LIFF_ID?.trim() || defaultVerifyLiffId
const getProfileLiffId = () =>
  import.meta.env.VITE_PROFILE_LIFF_ID?.trim() || defaultProfileLiffId
const getLiffUrl = (liffId: string) => `https://liff.line.me/${liffId}`
const getCleanRedirectUri = () =>
  `${window.location.origin}${window.location.pathname}`

const initLiff = async () => {
  const liffId = getLiffId()

  if (!initPromise) {
    initPromise = liff.init({ liffId, withLoginOnExternalBrowser: true }).catch((error) => {
      initPromise = null
      throw error
    })
  }

  await initPromise
}

export const closeLiffWindowOrOpenProfile = async () => {
  await initLiff()

  if (liff.isInClient()) {
    liff.closeWindow()
    return
  }

  window.location.replace(getLiffUrl(getProfileLiffId()))
}

export const getLineIdentity = async (): Promise<LineIdentity> => {
  const liffId = getLiffId()
  await initLiff()

  if (!liff.isLoggedIn()) {
    if (liff.isInClient()) {
      liff.login({ redirectUri: getCleanRedirectUri() })
    } else {
      window.location.replace(getLiffUrl(liffId))
    }

    throw new LiffLoginRedirectError()
  }

  const [profile, lineIdToken] = await Promise.all([
    liff.getProfile(),
    Promise.resolve(liff.getIDToken()),
  ])

  return {
    lineUserId: profile.userId,
    lineIdToken: lineIdToken ?? undefined,
    lineDisplayName: profile.displayName,
    linePictureUrl: profile.pictureUrl,
  }
}

export const isLiffLoginRedirectError = (error: unknown) =>
  error instanceof LiffLoginRedirectError
