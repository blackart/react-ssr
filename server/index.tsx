import * as React from 'react';
import { renderToString } from "react-dom/server";
import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as Loadable from 'react-loadable';
import * as fs from "fs";
import App from "../src/App";
import Helmet from 'react-helmet';

const htmlTemplate = fs.readFileSync('build/index.html', 'utf8');

const port = 8080;
const server = express();

const renderApp = (data: string) => {
    return htmlTemplate.replace(`<div id="root"></div>`, `<div id="root">${data}</div>`);
};

server.use(compression());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    let html = renderApp(renderToString(<App />));
    const helmet = Helmet.renderStatic();

    console.log('get');
    res.send(html);
});

server.use(express.static('build'));

Loadable.preloadAll().then(() => {
    server.listen(port, () => console.log(`Example app listening on port ${port}!`));
});