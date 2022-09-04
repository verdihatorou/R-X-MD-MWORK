import twDownloader from 'twitter-url-direct'
let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://twitter.com/TweetsOfCats/status/1547778899534172160`
    let res = await twDownloader(args[0])
    for (let result of res.download) {
    conn.sendFile(m.chat, result.url.replace('https://ssstwitter.com', ''), 'twitter.mp4', author, m)
  }
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twitter|tw)$/i

handler.limit = true

export default handler
