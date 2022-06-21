import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeListTeamsController } from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/team/list', adapt(makeListTeamsController()))
}
