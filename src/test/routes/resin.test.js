'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('default resin route', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        method: 'GET',
        url: '/resins',
        query: {'test': true}
    })
    t.same(JSON.parse(res.payload), [
        {
            "_id": "6432fa236c7785a51497d1fd",
            "name": "test",
            "display": "Test",
            "workTime": 100,
            "cureTime": 1000,
            "gramsPerML": 1,
            "gramRatioPartA": 100,
            "gramRatioPartB": 50,
            "volRatioPartA": 100,
            "volRatioPartB": 75
        }
    ])
})