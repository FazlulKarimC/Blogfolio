import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from '@fazlulkarim/common'

const userRoute = new Hono<{Bindings: { DATABASE_URL: string, JWT_SECRET: string }}>()

userRoute.post('/signup', async(c) => {
    const prisma = new PrismaClient({datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }

    const user_exists = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
  
    if (user_exists) {
      c.status(400);
      return c.json({ error: "user already exists" });
    }
  
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    })
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({ token }, 200)
    })
  
  
  
userRoute.post('/signin', async (c) => {
	const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

	const user = await prisma.user.findUnique({
			where: {
			email: body.email
			}
	});

	if (!user) {
			c.status(403);
			return c.json({ error: "user not found" });
	}

  if (user.password !== body.password) {
    c.status(403);
    return c.json({ error: "wrong password" });
  }

	const token = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ token });
	})

export default userRoute