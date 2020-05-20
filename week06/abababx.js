function match(string) {
    let status = start
    for(let c of string) {
        status = status(c)
    }
    return status === end
}

function start(c) {
    if(c === 'a') {
        return findA1
    } else {
        return start
    }
}

function end() {
    return end
}

function findA1(c) {
    if(c === 'b') {
        return end
    } else {
        return start(c)
    }
}

function findA2(c) {
    if(c === 'a') {
        return findB2
    } else {
        return findA1(c)
    }
}

function findB2(c) {
    if(c === 'b') {
        return findA3
    } else {
        return findA1(c)
    }
}

function findA3(c) {
    if(c === 'a') {
        return findB3
    } else {
        return findA2(c)
    }
}

function findB3(c) {
    if(c === 'b') {
        return findX
    } else {
        return findB2(c)
    }
}

function findX(c) {
    if(c === 'x') {
        return end
    } else {
        return findA3(c)
    }
}

console.log(match('a is vary good a sd qwe abababx asdasd'));
