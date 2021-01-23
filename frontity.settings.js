const settings = {
  "name": "ersag-astana",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Ersag Astana",
      "description": "Турецкая продукция"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Главная",
              "/"
            ],
            [
              "О нас",
              "/about"
            ],
            [
              "Контакты",
              "/contact"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:8888/ersag-astana"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
