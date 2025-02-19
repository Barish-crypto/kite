import * as fs from 'fs';
const data = fs.readFileSync('wallets_ref.txt', 'utf8');
const lines = data.split('\n');
const addresses = lines.map(line => line.split('|')[0]);
fs.writeFileSync('wallets.txt', addresses.join('\n'));

