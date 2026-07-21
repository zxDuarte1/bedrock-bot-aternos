const bedrock = require('bedrock-protocol')

// CONFIGURE AQUI COM OS DADOS DO SEU SERVIDOR
const config = {
  host: 'Duarte5743-EXdi.aternos.me', // Seu endereço (da print)
  port: 60029,                         // Sua porta (da print)
  username: 'MeuBotBedrock',           // Nome do bot
  offline: true                        // ESSENCIAL para Aternos!
}

console.log('🔄 Conectando ao servidor Bedrock...')
console.log(`📡 Endereço: ${config.host}:${config.port}`)

const client = bedrock.createClient(config)

client.on('join', () => {
  console.log('✅ BOT ENTROU NO SERVIDOR!')
  console.log(`👤 Nome: ${client.username}`)
})

client.on('text', (packet) => {
  console.log(`💬 ${packet.source_name}: ${packet.message}`)
})

client.on('error', (err) => {
  console.error('❌ ERRO:', err.message)
})

client.on('disconnect', (reason) => {
  console.log(`🔌 Desconectado: ${reason}`)
})

// Mantém o bot "acordado" e mostra que está vivo
setInterval(() => {
  console.log('⏰ Bot ainda está online...')
}, 30000)
