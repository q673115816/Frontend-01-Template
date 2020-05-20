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
        return findB1
    } else {
        return start(c)
    }
}

function findB1(c) {
    if(c === 'c') {
        return findA2
    } else {
        return start(c)
    }
}

function findA2(c) {
    if(c === 'a') {
        return findB2
    } else {
        return start(c)
    }
}

function findB2(c) {
    if(c === 'b') {
        return findX
    } else {
        return findA1(c)
    }
}

function findX(c) {
    if(c === 'x') {
        return end
    } else {
        return findB1(c)
    }
}

console.log(match('abcabcabx'))