const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPathFile = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPathFile, 'utf8');

module.export = solc.compile(source, 1).contracts[':Inbox']

