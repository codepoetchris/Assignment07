/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        // console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
        return 'Adding order for ' + order.emailAddress;
    };

    Truck.prototype.deliverOrder = function (customerId) {
        // console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
        return 'Delivering order for ' + customerId;
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + ' has pending orders:');
        var returnValues = [];
        var i = 0;
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
            returnValues[i++] = this.db.get(id);
        }.bind(this));
        return returnValues;
    };

    App.Truck = Truck;
    window.App = App;
})(window);
