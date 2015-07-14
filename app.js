// Configure the path to our identified module.
requirejs.config({
    paths: {
        identifiedModule: 'js/identifiedModule'
    }
});

// Load in the main app file.
requirejs(['js/main']);