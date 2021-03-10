'use strict'

/**
 * Iniciar servidor para consumir los endpoints
 */

const app = require('./src/app');
const port = 3001;

app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});