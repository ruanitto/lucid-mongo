'use strict'

/*
 * adonis-lucid
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('mongodatabase.js', path.join(__dirname, './templates/config.mustache'))
    cli.command.completed('create', 'config/mongodatabase.js')
  } catch (error) {
    // ignore errors
  }
}
