const path          = require('path'); // Integrisano u modul - ne moramo instalirati
const publicPath    = path.join(__dirname, '../public');
const express       = require('express');
const port          = process.env.PORT || 3000;

let app = express();

app.use(express.static(publicPath), (req, res) => {

});





app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});