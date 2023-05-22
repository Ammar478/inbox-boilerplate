const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3Provider = new Web3(ganache.provider());

// mockData 

class Car
{
    park ()
    {
        return 'stopped';
    }

    drive ()
    {
        return 'vroom';
    }
}

describe('Car', () =>
{ 
    const car_1= new Car();
    it('should return stopped when called Park ', () =>
    {
        assert.equal(car_1.park(),'stopped')
    })

    it('should return vroom when called Drive', () =>
    {
        assert.equal(car_1.drive(),'vroom')
    })
})