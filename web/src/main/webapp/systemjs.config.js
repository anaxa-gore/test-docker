/**
 * Created by tbonavia on 29/06/2016.
 */
(function (global) {
    // Où sont les données ?
    var map = {
        'app': 'app_js',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    // Comment chercher les données ?
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
        //'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    ngPackageNames.forEach(packIndex);

    console.log(map);
    console.log(packages);

    System.config({
        map: map,
        packages: packages
    });
})(this);