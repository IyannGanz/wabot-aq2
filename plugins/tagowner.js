let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Kak the.sad.boy01, Ada Yang Manggil anda๐
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@๐ฃ๐ฑ๐ฎ ๐ผ๐ช๐ญ. ๐ซ๐ธ๐01|@+62 895-3362-82144|@62895336282144|@0895336282144/i
handler.command = new RegExp

module.exports = handler