# website-maintenance-container

The idea of this `website-maintenance-container` is to have a fairly simple website that will display a friendly maintenance message whenever you update your services.

To customize the displayed texts, you only have to change the text strings inside the [services.json](https://github.com/thematchless/website-maintenance-container/blob/main/src/services.json) file.

```json
{
  "services":
    {
      "headline": "Website maintenance",
      "description": "We are back in a couple of minutes.",
      "favicon_url": "https://oflisback.github.io/react-favicon/img/github.ico"
    }
}
```

## commands
| command         | description                        |
|-----------------|------------------------------------|
| `npm run start` | to start the local dev environment |
| `npm run build` | to build the production version    |
