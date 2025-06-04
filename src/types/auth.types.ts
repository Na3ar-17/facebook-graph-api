export const EnumAuthTokens = {
  ACCESS_TOKEN: 'accessToken'
} as const

export type EnumAuthTokens = (typeof EnumAuthTokens)[keyof typeof EnumAuthTokens]
