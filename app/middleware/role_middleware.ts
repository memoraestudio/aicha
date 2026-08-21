import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

type Role = 'user' | 'admin'

export default class RoleMiddleware {
  async handle(ctx: HttpContext, next: NextFn, options: { roles: Role[] }) {
    if (!options.roles.includes(ctx.auth.user!.role as Role)) {
      return ctx.response.forbidden({ message: 'Anda tidak memiliki akses ke halaman ini.' })
    }

    return next()
  }
}
