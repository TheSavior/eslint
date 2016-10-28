/**
 * @fileoverview This rule will enforce blank lines around commonjs exports
 * @author Eli White
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "This rule will enforce blank lines around commonjs exports",
            category: "Node.js and CommonJS",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            {
                definitions: {
                    optionValue: {
                        anyOf: [
                            {
                                enum: ["always", "never", "ignore"]
                            },
                            {
                                type: "object",
                                properties: {
                                    after: {enum: ["always", "never", "ignore"]},
                                    before: {enum: ["always", "never", "ignore"]}
                                },
                                additionalProperties: false
                            }
                        ]
                    }
                },
                anyOf: [
                    {
                        enum: ["always", "never"]
                    },
                    {
                        type: "object",
                        properties: {
                            "module.exports": {$ref: "#/definitions/optionValue"},
                            exports: {$ref: "#/definitions/optionValue"}
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },

    create(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods

        };
    }
};
