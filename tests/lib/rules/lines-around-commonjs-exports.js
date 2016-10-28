/**
 * @fileoverview This rule will enforce blank lines around commonjs exports
 * @author Eli White
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/lines-around-commonjs-exports"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("lines-around-commonjs-exports", rule, {

    valid: [
        {
            code: "var a = 1;\nmodule.exports = a;",
            options: ["never"]
        }, {
            code: "var a = 1;\nmodule.exports = a;\nmodule.exports = b;",
            options: ["never"]
        }, {
            code: "var a = 1;\nexports = a;\nmodule.exports = b;",
            options: ["never"]
        }
    ],

    invalid: [
        {
            code: "var a = 1;\n\nmodule.exports = a;",
            options: ["never"],
            errors: [{
                message: "There should not be extra blank lines around commonjs exports",
                type: "Identifier"
            }]
        }, {
            code: "var a = 1;\nmodule.exports = a;\n\nmodule.exports = b;",
            options: ["never"],
            errors: [{
                message: "There should not be extra blank lines around commonjs exports",
                type: "Identifier"
            }]
        }, {
            code: "var a = 1;\nmodule.exports = a;",
            options: ["always"],
            errors: [{
                message: "There should be at least one extra blank lines around commonjs exports",
                type: "Identifier"
            }]
        }, {
            code: "var a = 1;\n\nmodule.exports = a;\nmodule.exports = b;",
            options: ["always"],
            errors: [{
                message: "There should be at least one extra blank lines around commonjs exports",
                type: "Identifier"
            }]
        }
    ]
});
