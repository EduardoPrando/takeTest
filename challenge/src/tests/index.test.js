/* eslint-disable no-unused-expressions */
const sinon = require('sinon');

const { expect } = require('chai');

const utilsFunctions = require('../utils/functions');
const { allItemsResponse, filteredItems } = require('./utils/responseObj');
const { filteredDataFromResponse } = require('../middleware/filteredDataFromResponse');

describe('testing functionx', () => {
  let stub;

  before(async () => {
    sinon.stub(utilsFunctions, 'axiosGetConnection').resolves(allItemsResponse);
    stub = await utilsFunctions.axiosGetConnection();
  });

  after(async () => {
    await utilsFunctions.axiosGetConnection.restore();
  });

  describe('testing axiosGetConnection', () => {
    it('should return a object', () => {
      expect(stub).to.be.an('array');
    });

    it('should return the same object', () => {
      expect(stub).to.deep.equal(allItemsResponse);
    });
  });

  describe('testing filterData', () => {
    it('should return specific objects whit 5 results', async () => {
      const filterItems = utilsFunctions.filterData(stub);

      expect(filterItems.length).to.be.equal(5);
      expect(filterItems).to.deep.equal(filteredItems);
    });
  });
});

describe('testing filteredDataFromResponse', () => {
  const req = {};
  const res = {};
  const next = () => {};

  before(() => {
    res.status = sinon.stub().returns(res);
  });

  it('should return status 200', async () => {
    await filteredDataFromResponse(req, res, next);
    const resStatus = res.status.calledWith(200);

    expect(resStatus).to.be.true;
  });
});
