'use strict';

const index = require('./index-316b21a0.js');

function partition(predicate, thisArg) {
    return (source) => [index.filter(predicate, thisArg)(source), index.filter(index.not(predicate, thisArg))(source)];
}

function race(...args) {
    return index.raceWith(...index.argsOrArgArray(args));
}
