var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
/* GET home page. */
router.get('/www', async function (req, res, next) {
  await fs.writeFile(path.resolve(__dirname, '../../server/public', req.query.file), req.query.msg, (err) => {
    if (err) console.log(err)
  })
  res.status(200).send(req.query.msg)
  // res.render('index', { title: 'pubilh' });
});

router.post('/create', async (req, res, next) => {
  await fs.writeFile(path.resolve(__dirname, '../../server/public', req.body.filename), req.body.message, (err) => {
    if (err) console.log(err)
  })
  res.send('create')
})

router.post('/s', async (req, res, next) => {
  let matched = req.url.match(/filename=([^&]+)/)
  let filename = matched && matched[1]
  if(!filename)
    return
  let writeStream = fs.createWriteStream(path.resolve(__dirname, '../../server/public', filename))
  req.pipe(writeStream)
  req.on('end', () => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('ojbk')
  })
})

router.post('/zip', (req, res, next) => {
  res.end('unzip')
})

module.exports = router;
