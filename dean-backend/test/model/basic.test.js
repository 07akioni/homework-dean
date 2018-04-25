'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/model.test.js', () => {

  it('should import without error', async function () {
    let noErrorRaised = true;
    try {
      const models = require('../app/sequelize/models')
    } catch (err) {
      console.error(err)
      noErrorRaised = false
    }
    assert(noErrorRaised)
  });

  it('should be able to remove entries', async function () {
    const models = require('../app/sequelize/models')
    const line = await models.sequelize.query("DELETE FROM `tbPerson` WHERE `pID` = '666'")
    assert(!!line)
  })

  it('should be able to create new entries', async function () {
    const models = require('../app/sequelize/models')
    const line = await models.tbPerson.create({
      pID: '666',
      Name: '666',
      Gender: 0,
      pType: 'T'
    })
    assert(!!line)
  })
});
