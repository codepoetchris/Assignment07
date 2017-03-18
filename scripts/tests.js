QUnit.test( '8.10 - Create DataStore', function ( assert ) {
    var ds = new App.DataStore();
    assert.ok(ds = new App.DataStore(), 'DataStore created.');
    assert.deepEqual(ds.add('m@bond.com', 'tea'), undefined, 'Order added.');
    assert.deepEqual(ds.add('james@bond.com', 'eshpressho'), undefined, 'Order added.');
    assert.deepEqual(ds.getAll(), {'m@bond.com': 'tea', 'james@bond.com': 'eshpressho'}, 'All objects listed');
    assert.deepEqual(ds.remove('james@bond.com'), undefined, 'Order removed.');
    assert.deepEqual(ds.getAll(), {'m@bond.com': 'tea'}, 'All objects listed');
    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.deepEqual(ds.get('james@bond.com'), undefined, 'james@bond.com does not exist.')
});

QUnit.test( '8.32 - Create Truck', function ( assert ) {
    //Part of the problem you run into when trying to automate testing of 8.32
    //is the fact that the output to the console is not returned, just displayed.
    //In order to get around this I just added a return statement to the truck
    //functions.

    assert.deepEqual(myTruck.truckId, 'ncc-1701', 'Truck exists.');
    assert.equal(myTruck.createOrder(
      { emailAddress: 'me@goldfinger.com', coffee: 'double mocha'}),
      'Adding order for me@goldfinger.com', 'Order added.');
    assert.equal(myTruck.deliverOrder('dr@no.com'), 'Delivering order for dr@no.com', 'Order delivered');
    assert.deepEqual(myTruck.printOrders(),
      [{"coffee": "double mocha", "emailAddress": "me@goldfinger.com"}],
      'Orders displayed');
});
