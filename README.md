# Parcel Transformer plugin for Handlebars

## Installation

```sh
npm i -D parcel-transformer-handlebars
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
      "parcel-transformer-handlebars"
    ]
  }
}
```

## Customization

Customization is possible by using a `.hbsrc`, `.hbsrc.js` or `hbs.config.js` file.

For example, you can set local variables using `.hbsrc`.

```json
{
    "firstname": "Paulo",
    "lastname": "Alves"
}
```

For more information, see [HBS guide](https://handlebarsjs.com/guide/)
