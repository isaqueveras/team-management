import { env } from '@/main/config/env'
import { JwtTokenHandler } from '@/infrastructure/gateways'

export const makeJwtTokenHandler = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.tokenJWT)
}
