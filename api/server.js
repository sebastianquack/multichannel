let Hapi = require('hapi')
let mongoose = require('mongoose')
let RestHapi = require('rest-hapi')

const Path = require('path');
const Inert = require('@hapi/inert');

if(process.env.NODE_ENV != "production") {
  require('dotenv-safe').config()  
}

async function api() {
  try {
    let server = Hapi.Server({ 
      port: process.env.PORT,
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'admin')
        }
      }
    })

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/admin/{param*}',
        handler: {
            directory: {
                path: './index.html',
                redirectToSlash: true
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/static/{param*}',
        handler: {
            directory: {
                path: './static',
                redirectToSlash: true
            }
        }
    });


    let config = {
      appTitle: "testresthapi",
      version: "1.0.0",
      apiPath: 'custom_endpoints',
      mongo: {
        URI: process.env.MONGODB_URI
      }
    };

    await server.register({
      plugin: RestHapi,
      options: {
        mongoose,
        config
      },
    })

    await server.start()

    console.log("Server ready", server.info)

    return server
  } catch (err) {
    console.log("Error starting server:", err);
  }
}

module.exports = api()