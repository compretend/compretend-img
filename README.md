# Compretend Image Element

An image element that understands what is in the image, powered by ML.

## Usage

Include compretend on your web page.

```html
<script src="https://cdn.jsdelivr.net/npm/compretend/dist/compretend.min.js"></script>
```
Now you can add compretend elements to your page.

```html
<compretend-img src="http://site.com/image.png" crop="faces">
</compretend-img>
```

The above example will place an image on the page centered around the faces detected in the image.

### <compretend-img>

Image element that understands what is in the image.

Settings can be set as either element attributes or
as element properties.

```javascript
let elem = document.createElement('compretend-img')
elem.crop = "faces"
elem.width = 320
// OR
document.body.innerHTML += `
  <compretend-img src="https://imageurl" crop="faces" width=100>
  </compretend-img>
`
```

The following properties are available.

* **src**: URL to remote image. Can be on any publicly available server.
* **data**: ArrayBuffer or Blob representing image data.
* **crop**: String for detection method. Only "faces" supported currently.
  * Detected attributes in the image will be centered within the
    constraints set of width/height. If width/height are not set
    the image is cropped around the detected elements.
* **width**: Image element width.
* **height**: Image element height.
* **scaled**: Scale image down to the specific dimensions (height and width). Defaults to false.
* **margin**: Ads margin to a cropped and scaled image.
