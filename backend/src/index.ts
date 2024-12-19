import { Hono } from 'hono'
import userRoute from './routes/userRoute'
import postRoute from './routes/postRoute'

const app = new Hono().basePath('/api/v1')

app.route('/user', userRoute)
app.route('/post', postRoute)


app.all('*', (c) => {
  return c.json({ message: 'not found' }, 404)
})


export default app
