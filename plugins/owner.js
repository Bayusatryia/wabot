let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  
owner bot kami adalah wa.me/6282225491446
hubungi kami jika ada keperluan penting

SOSMED KAMI :
Instagram: @story.anime45

https://chat.whatsapp.com/COgU6HrLS7f509yOir3d2R

`.trim(), m)
}
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

