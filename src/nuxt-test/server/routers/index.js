const {
  Router
} = require('express')
const {
  verifyMiddleware
} = require('../middleware/verify.js')
const router = Router()

router.get('/home', function (req, res, next) {
  res.json({
    name: 'this is HOME!'
  })
})
router.get('/list', function (req, res, next) {
  next();
})
router.get('/detail', function (req, res, next) {
  res.json({
    name: 'this is DETAIL!'
  })
})

router.get('/test2', verifyMiddleware, function (req, res, next) {
  res.json({
    name: '需要鉴权的api'
  })
})

module.exports = router