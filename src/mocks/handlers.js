import { rest } from 'msw'

export const handlers = [
    rest.get('https://openexchangerates.org/api/latest.json', (req, res, ctx) => {
        return res(ctx.status(200)),
        ctx.json([
            {},
        ])
    })
]