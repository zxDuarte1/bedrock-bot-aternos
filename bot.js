const bedrock = require('bedrock-protocol')

const config = {
  host: 'Duarte5743-EXdi.aternos.me',
  port: 60029,
  username: 'MeuBot',
  offline: true,
  version: '1.26.30',
  skipPing: true // <--- ESTA É A LINHA MÁGICA QUE RESOLVE O PROBLEMA
}

console.log('🔄 Conectando ao servidor Bedrock...')
console.log(`📡 Endereço: ${config.host}:${config.port}`)

const client = bedrock.createClient(config)

client.on('join', () => {
  console.log('✅ BOT ENTROU NO SERVIDOR!')
})

client.on('error', (err) => {
  console.error('❌ ERRO:', err.message)
})

client.on('disconnect', (reason) => {
  console.log(`🔌 Desconectado: ${reason}`)
})

// Mantém o bot rodando
setInterval(() => {
  console.log('⏰ Bot ainda está online...')
}, 30000)
