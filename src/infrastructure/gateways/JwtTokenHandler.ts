import { TokenGenerator, TokenValidator } from '@/domain/contracts/gateways'

import { sign, verify, JwtPayload } from 'jsonwebtoken'

export class JwtTokenHandler implements TokenGenerator, TokenValidator {
  constructor (private readonly secret: string) {}

  async generate ({ key, expirationInMs }: TokenGenerator.Input): Promise<TokenGenerator.Output> {
    const expirationInSeconds = expirationInMs / 1000
    return sign({ key: key }, this.secret, { expiresIn: expirationInSeconds })
  }

  async validate ({ token }: TokenValidator.Input): Promise<TokenValidator.Output> {
    const payload = verify(token, this.secret) as JwtPayload
    return payload.key
  }
}
