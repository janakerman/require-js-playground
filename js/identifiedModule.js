// The ID name is optional - the path is used as the ID.
// Here we're using it though.
 define('identifiedModule', ['print'], function(print) {
    return function() { print('I\'m loaded by identifier!'); };
});