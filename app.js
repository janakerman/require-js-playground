// Configure the path to our identified module.
requirejs.config({
    baseUrl: 'js',
    paths: {
        identifiedModule: 'identifiedModule'
    }
});

// Load in the main app file.
requirejs(['main']);