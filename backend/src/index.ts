import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRoute from './routes/userRoute'
import postRoute from './routes/postRoute'

const app = new Hono().basePath('/api/v1')

app.use('*', cors())

app.route('/user', userRoute)
app.route('/post', postRoute)


app.all('*', (c) => {
  return c.json({ message: 'not found' }, 404)
})


export default app
