#!/usr/bin/node

var rpc = require('node-json-rpc');

var opts = {
    port: 5080,
    host: '127.0.0.1',
    path: '/',
    strict: true
};

// create a server

var serv = new rpc.Server(opts);

// add functions
serv.addMethod('foo', function(args, callback){    
    var err, res;
    if(args.length === 2) {
        res = args[1] + args[0];
    } else if(args.length > 2) {
        res = 0;
        for(var it=0; it < args.length; ++i) {
            res += args[it];
        }
    } else {
        err = { code: -32602, message: "Invalid parameters" };
    }
    callback(err, res);
});


serv.start(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Server running...');
    }
});


