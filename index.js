const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>AWS Technical Assessment-1</title>
                <style>
                    body { display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 24px; }
                </style>
            </head>
            <body>
                <h1>AWS Technical Assessment-1</h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

