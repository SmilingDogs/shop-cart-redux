const express = require('express')  //* импорт модуля express для создания сервера
const path = require('path');
const app = express(); //* создание серевера (app)
const port = process.env.PORT || 8085;

const publicPath = path.join(__dirname, '../build');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
 });
