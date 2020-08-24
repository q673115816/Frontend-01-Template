/**
 * Owned by: @q673115816

App ID: 77939

Client ID: Iv1.ffc7186734249e56

Client secret: e851d6cb5e18899aee08d2a096e56ba0d321de12


code: d319ab73919572dda404
 * 
 * 
 */
let client_secret = ''

 let state = 'abc123'

// step 1

// https://github.com/login/oauth/authorize?client_id=Iv1.ffc7186734249e56

// step 2
{
    let xhr = new XMLHttpRequest
    let params = `client_id=Iv1.ffc7186734249e56&client_secret=e851d6cb5e18899aee08d2a096e56ba0d321de12&code=d319ab73919572dda404`
    xhr.open('POST', 'https://github.com/login/oauth/access_token?' + params)
    xhr.send(null)
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    })
}


// step 3
let token = '0c258defd159e51f64ca7f688bb556100845e455'

let type = 'bearer'
{
    let xhr = new XMLHttpRequest
    xhr.open('GET', 'https://api.github.com/user')
    xhr.setRequestHeader('Authorization', 'token 0c258defd159e51f64ca7f688bb556100845e455')
    xhr.send(null)
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    })
}
