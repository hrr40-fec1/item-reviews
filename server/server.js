const app = require('./index.js');

const port = process.env.PORT || 3004;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
