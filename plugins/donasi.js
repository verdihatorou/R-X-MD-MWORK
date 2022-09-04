let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [082221792667]
│ • Dana [082221792667]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [082221792667]
│ • Pulsa [082221792667]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
