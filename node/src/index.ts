import express from 'express'
import * as ip from 'ip'
import * as process from "process";

const ip4 = ip.address()
const port = process.env.PORT ?? 18000
const serverId = process.env.SERVER_ID ?? -1
const app = express()

app.get('/', (req, res) => {
    res.json({
        serverId,
        ip4,
    }).end()
})

app.listen(port, () => {
    console.log(`server #${serverId} listening @ http://${ip4}:${port}`)
})
