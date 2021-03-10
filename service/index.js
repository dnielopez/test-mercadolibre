'use strict'

const app = require('./src/app');
const port = 3001;

app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});