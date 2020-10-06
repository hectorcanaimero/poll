
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
module.exports = {
    copyAssets: {
        src: ['{{SRC}}/assets/**/*'],
        dest: '{{WWW}}/assets'
    },
    copyIndexContent: {
        src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
        dest: '{{WWW}}'
    },
    copyFonts: {
        src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
        dest: '{{WWW}}/assets/fonts'
    },
    copyPolyfills: {
        src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
        dest: '{{BUILD}}'
    },
    copyNgxFont: {
        src: ['{{ROOT}}/node_modules/@swimlane/ngx-datatable/release/assets/fonts/data-table.ttf',
        '{{ROOT}}/node_modules/@swimlane/ngx-datatable/release/assets/fonts/data-table.woff'],
        dest: '{{BUILD}}/fonts'
    }
}