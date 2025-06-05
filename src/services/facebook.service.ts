import type { IProfile } from '@/entities/profile.entity'

export interface ITokenValidationResult {
  isValid: boolean
  userId?: string
  expiresAt?: number
  errorMessage?: string
}

interface DebugTokenData {
  is_valid: boolean
  user_id: string
  expires_at: number
}

interface GraphApiError {
  error: {
    message: string
    type: string
    code: number
    fbtrace_id: string
  }
}

interface DebugTokenSuccess {
  data: DebugTokenData
}

type DebugTokenResponse = DebugTokenSuccess | GraphApiError

interface PictureData {
  url: string
}

interface ProfileSuccess {
  id: string
  name: string
  email?: string
  picture?: {
    data?: PictureData
  }
}

type ProfileResponse = ProfileSuccess | GraphApiError

export class FacebookService {
  private readonly graphApiBaseUrl = 'https://graph.facebook.com'

  async validateAccessToken(accessToken: string): Promise<ITokenValidationResult> {
    try {
      const res = await fetch(
        `${this.graphApiBaseUrl}/debug_token?input_token=${accessToken}&access_token=${process.env.FACEBOOK_APP_ID}|${process.env.FACEBOOK_APP_SECRET}`
      )
      const data: DebugTokenResponse = await res.json()

      if (!res.ok || 'error' in data) {
        return {
          isValid: false,
          errorMessage: 'error' in data ? data.error.message : 'Invalid response'
        }
      }

      return {
        isValid: data.data.is_valid,
        userId: data.data.user_id,
        expiresAt: data.data.expires_at
      }
    } catch (error) {
      console.error('validateAccessToken error:', error)
      return { isValid: false, errorMessage: 'Failed to validate token' }
    }
  }

  async getUserProfile(accessToken: string): Promise<IProfile> {
    try {
      const res = await fetch(
        `${this.graphApiBaseUrl}/me?fields=id,name,email,picture&access_token=${accessToken}`
      )
      const data: ProfileResponse = await res.json()

      if (!res.ok || 'error' in data) {
        throw new Error('error' in data ? data.error.message : 'Profile request failed')
      }

      return {
        id: data.id,
        name: data.name,
        email: data.email ?? null,
        photo: data.picture?.data?.url ?? null
      }
    } catch (error) {
      console.error('getUserProfile error:', error)
      throw new Error('Unable to fetch profile')
    }
  }
}
