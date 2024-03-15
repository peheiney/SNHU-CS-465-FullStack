/* GET Homepage */
const index = (req, res) => {
    res.render('index', { titale: "Travlr Getaways"});
};

module.exports = {
    index 
}