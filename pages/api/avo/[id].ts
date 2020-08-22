import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const Avo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  const id = request.query.id
  const avo = await db.getById(id as string)

  response.statusCode = 200 //okay
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: avo }))
  // other away by nextjs:

  // response.status(200).json(avo);
}

export default Avo
