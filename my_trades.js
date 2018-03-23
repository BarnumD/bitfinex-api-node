'use strict'

process.env.DEBUG = 'bfx:examples:*'

const debug = require('debug')('bfx:examples:rest2_trade_history')
const bfx = require('./examples/bfx')
const rest = bfx.rest(2, { transform: true })

debug('fetching trades...')

const start = Date.now() - (135 * 24 * 60 * 60 * 1000)
const end = Date.now() - (120 * 24 * 60 * 60 * 1000)
console.log ('start:',start,' end:',end)
//const end = Date.now()
const limit = 25

rest.trades('tETHBTC', start, end, limit, (err, trades) => {
  if (err) {
    return debug('error: %s', err.message)
  }

  debug('foo trades...',trades)
  trades.forEach((trade) => {
    debug(
      'trade ID %d %s | %f @ %f | %s',
      trade.id, trade.pair, trade.execAmount, trade.execPrice, trade.orderType
    )
  })
}).catch((err) => {
  debug('error: %j', err)
})
