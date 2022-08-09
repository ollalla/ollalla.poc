import { l as filter, p as not, r as raceWith, q as argsOrArgArray } from './index2.js';

function partition(predicate, thisArg) {
    return (source) => [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
}

function race(...args) {
    return raceWith(...argsOrArgArray(args));
}
