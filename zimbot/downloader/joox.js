const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "joox",
    alias: ["jooxplay"],
    desc: "Download Media From https://joox.com",
    type: "downloader",
    example: "Example : %prefix%command Snowman",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/joox", { query: text }, "apikey"))
        ZimBotInc.sendFile(m.from, fetch.result.mp3Link, "", m)
    },
    isQuery: true
}