let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animecouple",
    alias: ["animecouples"],
    desc: "Generate Random Image Anime Couples",
    type: "randomimage",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/random/couples", {}, "apikey"))
        ZimBotInc.sendFile(m.from, fetch.result.male, "", m, { caption: "Random Anime Couples Male" })
        ZimBotInc.sendFile(m.from, fetch.result.female, "", m, { caption: "Random Anime Couples Female" })
    }
}