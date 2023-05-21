import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/signup', (req, res, ctx) => {
        console.log(req)
        return res(
            // Returns successful response
            ctx.status(201)
        )
  }),
]