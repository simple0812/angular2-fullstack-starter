[![Dependency Status](https://david-dm.org/jgodi/angular2-fullstack-starter.svg)](https://david-dm.org/jgodi/angular2-fullstack-starter)

# Angular2 Fullstack Starter

> A basic starter project that features Angular 2 with ES6 and Express/Node. Has fully integrated unit and e2e tests. Also, has the ability to build for production and configuration based on the environment!

> Huge Kudos goes to the [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) for being a great example!

### Quick Start

```bash
# Clone the repo
git clone https://github.com/jgodi/angular2-fullstack-starter.git

# CD into the project
cd angular2-fullstack-starter

# Install all required dependencies
npm install

# Start the server (uses WebpackDevServer for development)
npm start
```

Now, navigate to [http://localhost:3000](http://localhost:3000) in your browser and code!

### Testing

#### Unit Testing w/ Karma

```bash
# Run unit tests
npm test
```

Will run all karma unit tests. Coverage will be reported in `/coverage`.

#### E2E Testing w/ Protractor

Make sure to install the webdriver before hand using `npm run webdriver-update`.

```bash
# Start the application in one command prompt
npm start

# Start the webdriver in another command prompt
npm run webdriver-start

# Finally, run the e2e test in a third command prompt
npm run protractor
```

### Building

Building this application is easy, there are a few commands to make it very easy. It uses the `index.html` file that is located in `public` as a base template and outputs a build version of it into `server/views/index.html` to be served up via node.

#### Development

To build a development version of the application, run the following commands:

```bash
# Build a development version 
npm run build:dev
```

#### Production

To build a fully optimized production version of the application, run the following commands:

```bash
# Build a production version
npm run build:prod
```

### Running Production Code

To run the production version of the application, run the following commands:

```bash
npm run build:prod
npm run start:prod
```

### Adding Configuration

Configuration is controlled via [convict](https://github.com/mozilla/node-convict).

To add custom configuration, you first must modify the scheme located in `server/config.js`. Once you have the scheme in place, then go into `server/config/*` and add the value for each environment.

To change/remove/add environments, just look at the scheme and change the default format for `env`.