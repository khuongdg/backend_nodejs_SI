const app = require('./app');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    console.log("GET /");
    res.send('Hello World!');
}
);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);