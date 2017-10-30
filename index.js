/* globals Image, URL, fetch */
const gza = require('gza')
const qs = require('query-string')

const defaultAPI = 'https://compretend-img-api-pkzilvwcyf.now.sh'

const numberKeys = [
  'width',
  'height',
  'min-width',
  'min-height',
  'max-width',
  'max-height',
  'margin',
  'padding'
]

const properties = numberKeys.concat([
  'api',
  'scaled',
  'crop',
  'src'
])

const sorted = obj => {
  let o = {}
  Object.keys(obj).sort().forEach(k => { o[k] = obj[k] })
  return o
}

const init = async element => {
  await element.waitFor('src')
}

const createImage = async settings => {
  let q = Object.assign({}, settings)
  q.body = q.src
  delete q.src
  delete q.waitFor
  let query = qs.stringify(sorted(q))
  let img = new Image()
  let url = `${settings.api || defaultAPI}/images/generate?${query}`
  let res = await fetch(url)
  if (res.status !== 200) {
    throw new Error('Image generation failed.')
  }
  let blob = await res.blob()
  img.src = URL.createObjectURL(blob)
  return img
}

module.exports = gza`
${init}
<compretend-img ${properties}>
  ${createImage}
</compretend-img>
`
module.exports.createImage = createImage
