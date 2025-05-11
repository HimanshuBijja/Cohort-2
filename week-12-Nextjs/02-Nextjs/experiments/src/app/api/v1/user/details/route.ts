import type{ NextApiRequest, NextApiResponse } from 'next'

export default async function Signin(req : NextApiRequest, res : NextApiResponse ){
    res.json({
        msg : "working"
    })
}