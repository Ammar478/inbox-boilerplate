const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compiler');

const HI_THERE = 'hi there';
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [HI_THERE] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe('Inbox Deployment', () => {
  it('should deployed successfully and should return Gananche address  ', () => {
    assert.ok(inbox.options.address);
  });

  it('should set new value to message ', async () => {
    await inbox.methods.setMessage('NewMessage').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();

    assert.equal(message, 'NewMessage');
  });
});
