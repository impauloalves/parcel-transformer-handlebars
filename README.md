# Parcel Transformer plugin for Handlebars

## Installation

```sh
npm i -D parcel-transformer-hbs
```

## Configuration

[Parcel configuration](https://v2.parceljs.org/configuration/plugin-configuration/)

```json
{
  "extends": [
    "@parcel/config-default"
  ],
  "transformers": {
    "*.hbs": [
      "parcel-transformer-hbs"
    ]
  }
}
```

## Customization

Customization is possible by using a `.hbsrc`, `.hbsrc.js` or `hbs.config.js` file.

For example, you can set local variables using `.hbsrc`.

```json
{
  "locals": {
    "firstname": "Paulo"
  }
}
```

For more information, see [HBS guide](https://handlebarsjs.com/guide/)
