const app = require('./app');
const db = require('./config/db');
const cors = require('cors');
const UserModel = require('./models/user.model');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(cors());


app.get('/', (req, res) => {
    console.log("GET /");
    res.send('Hello World!');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);