let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Arya274/Arya-DN
╠➥ Instagram: @arpunchs
╠➥ YouTube: Drawl Nag
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Tsel:+62 822-2549-1446
╠➥ Tsel: +62 813-9236-5930
╠➥ Indosat: +62 858-3002-6476
║
║>Request? Wa.me/6282225491446
║
╠═〘 Rans BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

