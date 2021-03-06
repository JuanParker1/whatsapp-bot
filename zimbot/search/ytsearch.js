const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "ytsearch",
    alias: ["yts","ytsr"],
    desc: "Search Video From YouTube",
    type: "search",
    example: "Example : %prefix%command DRIPS OFC",
    exec: async(ZimBotInc, m, { command, text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/ytsearch", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `YouTube Search Query : ${toUpper(text)}\n\n`
        let result = fetch.result.filter(v => v.type == "video").map(v => v)
        for (let i of result) {
            caption += `*š® TITLE :* ${i.title}\n`
            caption += `*š® DESC :* ${i.description}\n`
            caption += `*š® TYPE :* ${i.type}\n`
            caption += `*š® ID :* ${i.videoId}\n`
            caption += `*š® URL :* ${i.url}\n`
            caption += `*š® DURATION :* ${i.timestamp}\n`
            caption += `*š® UPLOAD :* ${i.ago}\n`
            caption += `*š® VIEWS :* ${i.views}\n`
            caption += `*š® AUTHOR :* ${i.author.name}\n`
            caption += `\nāāāāāāāāāāāāāāāāā\n\n`
        }
        ZimBotInc.sendFile(m.from, result[0].thumbnail, "", m, { caption })
    },
    isQuery: true
}