'use strict';

var onml = require('onml'),
    lib = require('../lib');

function rand (max) {
    return Math.round(Math.random() * max);
}

function genSVG (w, h) {
    return ['svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: w || 1024,
        height: h || 768,
        viewBox: [0, 0, w || 1024, h || 768].join(' ')
    }];
}

function genSpots (n) {
    var group = ['g', {}];
    var i;
    for (i = 0; i < n; i++) {
        group.push(['rect', {
            id: 'spot_' + i,
            width: 20, height: 20,
            x: rand(1004),
            y: rand(728)
        }]);
    }
    return group;
}

var content = document.getElementById('content');
var svg = genSVG();
svg.push(genSpots(42));
content.innerHTML = onml.stringify(svg);

var sw = lib.p2k();

var i;
for (i = 0; i < 42; i++) {
    sw.add.element.id('spot_' + i);
}
