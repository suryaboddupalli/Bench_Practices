"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const Register = (req, res) => {
    try {
        const data = req.payload;
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
};
exports.Register = Register;
