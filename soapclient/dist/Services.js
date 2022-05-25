"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myService = void 0;
exports.myService = {
    MyService: {
        MyPort: {
            MyFunction: function (args) {
                return {
                    name: args.name
                };
            },
            MyAsyncFunction: function (args, callback) {
                callback({
                    name: args.name
                });
            },
            HeadersAwareFunction: function (args, cb, headers) {
                return {
                    name: headers.Token
                };
            },
        }
    }
};
