import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { deleteDetailQuery } from '../../../utils/queries'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const { postId } = req.body
        const query = deleteDetailQuery(postId)
        const data = await client.delete({ query: query })
            .then(() => {
                console.log('Video deleted')
            })
            .catch((err) => {
                console.error('Delete failed: ', err.message)
            })
        res.status(200).json(data)
    }
}
