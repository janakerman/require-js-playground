// The ID name is optional - the path is used as the ID.

define(function (require) {
    var sweetenedModule = require('sweetenedModule');
    var unsweetenedModule = require('unsweetenedModule');
    var identifiedModule = require('identifiedModule');

    sweetenedModule();
    unsweetenedModule();
    identifiedModule();
});

