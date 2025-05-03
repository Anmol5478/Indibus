const express = require('express');
const app = express();
const userModel = require('./models/user');
const multer = require('multer');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
const upload = multer({ storage });
app.post("/apply", upload.single('resume'), async (req, res) => {
    try {
        const { name, Phonenumber, Description, Jobrole } = req.body;
        const resume = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };

        const createdUser = await userModel.create({
            name,
            Phonenumber,
            Description,
            Jobrole,
            resume
        });

        res.send(createdUser);
        console.log(req.file)
        res.redirect("/")
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.render('users', { users });
  });

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
