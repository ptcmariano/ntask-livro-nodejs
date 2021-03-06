define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>OK da API + todas rotas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "sucesso",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"request\": {\n    \"path\": \"/\",\n    \"stack\": [\n      {\n        \"name\": \"<anonymous>\",\n        \"keys\": [],\n        \"regexp\": {},\n        \"method\": \"get\"\n      }\n    ],\n    \"methods\": {\n      \"get\": true\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/all.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
