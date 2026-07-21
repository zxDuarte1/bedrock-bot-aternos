const bedrock = require('bedrock-protocol')

const config = {
  host: 'Duarte5743-EXdi.aternos.me',
  port: 60029,
  username: 'MeuBot',
  offline: true,
  version: '1.26.30',
  // Ignora ping e tenta conectar direto
  connectTimeout: 30000,
  skipPing: true
}

console.log('🔄 Conectando ao servidor Bedrock...')
console.log(`📡 Endereço: ${config.host}:${config.port}`)

const client = bedrock.createClient(config)

client.on('join', () => {
  console.log('✅ BOT ENTROU NO SERVIDOR!')
})

client.on('error', (err) => {
  console.error('❌ ERRO:', err.message)
  // Se der erro, tenta novamente após 30 segundos
  setTimeout(() => {
    console.log('🔄 Tentando reconectar...')
    const newClient = bedrock.createClient(config)
    newClient.on('join', () => console.log('✅ BOT ENTROU NO SERVIDOR!'))
    newClient.on('error', (e) => console.error('❌ ERRO:', e.message))
  }, 30000)
})

client.on('disconnect', (reason) => {
  console.log(`🔌 Desconectado: ${reason}`)
})

// Mantém o bot rodando
setInterval(() => {
  console.log('⏰ Bot ainda está online...')
}, 60000)
