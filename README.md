# @slixites/gatsby-plugin-google-fonts

## How to use it ?

```js
yarn add @slixites/gatsby-plugin-google-fonts
// or
npm install --save @slixites/gatsby-plugin-google-fonts
```

Add fonts to your `gatsby-config.js`:

```js
module.exports = {
  // ...
  plugins: [
    // ...
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Montserrat',
          'source sans pro\:300,400,400i,700',
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
            rel: 'stylesheet preload prefetch',
        },
      },
    },
    // ...
  ]
  // ...
}
```


## How to find great ideas ?

- https://fonts.google.com