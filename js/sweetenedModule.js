// Having a bunch of dependancies can look a little strange:
// ['...', '...', '...', '...', '...', '...', '...', '...'], function(...,...,...
// So this is a little syntactic sugar.
define(function(require) {
    var print = require('./print');

    return function() { print('I have sugar!!'); };
});

// This is actually parsed by the AMD loader into:
// define(['require', 'dep1', 'dep2'], function (require) {
//     var dep1 = require('dep1'),
//         dep2 = require('dep2');

//     return function () {};
// });