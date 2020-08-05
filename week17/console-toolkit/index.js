
// var tty = require('tty')
// var ttys = require('ttys')
// var readline = require('readline')

// var stdin = ttys.stdin
// var stdout = ttys.stdout

var stdin = process.stdin
stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

var stdout = process.stdout

function getChar() {
    return new Promise((resolve, reject) => {
        stdin.once('data', (data) => {
            resolve(data)
        })
    })
}


function up(n = 1) {
    stdout.write('\033[' + n + 'A')
}
function down(n = 1) {
    stdout.write('\033[' + n + 'B')
}
function left(n = 1) {
    stdout.write('\033[' + n + 'D')
}
function right(n = 1) {
    stdout.write('\033[' + n + 'C')
}

void async function () {
    stdout.write('which framework do you want \n')
    let arr = ['vue', 'react', 'angular']
    let a = await select(arr)
    stdout.write('You selected ' + arr[a] + '\n')
    process.exit()
}()

async function select(choices) {
    let selected = 0
    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i]
        if (i === selected) {
            stdout.write('[\x1b[32mX\x1b[0m] ' + choice + '\n')
        } else {
            stdout.write('[ ] ' + choice + '\n')

        }
    }
    up(choices.length)
    right()
    while (true) {
        let char = await getChar()
        if (char === '\u0003') {
            process.exit()
            break
        }
        if (char === 'w' && selected > 0) {
            stdout.write(' ')
            left()
            selected--
            up()
            stdout.write('\x1b[32mX\x1b[0m')
            left()
        }
        if (char === 's' && selected < choices.length - 1) {
            stdout.write(' ')
            left()
            selected++
            down()
            stdout.write('\x1b[32mX\x1b[0m')
            left()
        }
        if (char === '\r') {
            down(choices.length - selected)
            left()
            return selected
            // process.exit()
            break
        }
    }
}