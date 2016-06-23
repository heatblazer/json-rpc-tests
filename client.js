#!/usr/bin/node

var rpc = require('node-json-rpc');

var opts = {
    port: 5080,
    host: '127.0.0.1',
    path: '/',
    strict: true
};

var client = new rpc.Client(opts);


client.call(
{"jsonrpc:": "2.0", "method":"foo", "params":[1,2], "id:": 0},
    function(err, res) {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });


client.call({"method": "foo", "params":[1,2]}, 
    function(err, res) {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    }
);


