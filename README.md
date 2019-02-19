# GrapesJS Idangerous Swiper Slider


Slider component using [Swiper](http://idangero.us/swiper/)

[Demo](http://grapesjs.com/demo.html)


## Requirements
* GrapesJS v0.12.60 or higher


## Summary

* Plugin name: `grapesjs-swiper-slider`
* Components
  * `swiper-container`
  * `swiper-wrapper`
  * `swipper-slide`
  * `swipper-pagination`
  * `swipper-scrollbar`
  * `swipper-prev`
  * `swipper-next`
* Blocks
  * `swiper-slider`




## Options
N/A

## Download

* NPM
  * `npm i grapesjs-swiper-slider`
* GIT
  * `git clone https://github.com/kaoz70/grapesjs-swiper-slider.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-swiper-slider.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-swiper-slider'],
      pluginsOpts: {
        'grapesjs-swiper-slider': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/kaoz70/grapesjs-swiper-slider.git
$ cd grapesjs-siper-slider
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
