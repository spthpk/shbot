let handler = function (m) {
  this.sendContact(m.chat, '556796005372', 'ঔৣ͜͡ 𝑯͢𝑰𝑫͢𝑹𝜟 𝛩𝑭 ͢𝑯𝒀͢𝑷𝑬💸⃟ꦿ⸼', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
