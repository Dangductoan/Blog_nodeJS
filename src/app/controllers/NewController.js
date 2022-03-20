const newController = {
    index(req, res) {
        res.render('news');
    },
    show(req, res) {
        res.send('NEW DEATH');
    },
};
module.exports = newController;
