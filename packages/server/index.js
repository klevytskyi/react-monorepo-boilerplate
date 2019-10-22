const express = require('express');
const path = require('path');
const compression = require('compression');
const sslMiddleWare = require('./ssl.middleware');

const appPaths = require('@rmb/app/config/paths');
const uiPaths = require('@rmb/ui/config/paths');

const port = process.env.PORT || 3000;
const app = express();

app.use(sslMiddleWare);
app.use(compression());

app.use('/ui', express.static(uiPaths.storybook));

app.use(express.static(appPaths.outputPath));
app.get('*', (_, res) =>
  res.sendFile(path.join(appPaths.outputPath, 'index.html'))
);

app.listen(port, () => console.log(`App is now running on ${port}`));
