class BlibliController {
    async blibli(req, res) {
        res.render("blibli.ejs", {
            layout: 'layouts/main-layout',
            user: req.user
        });
    }
}

module.exports = BlibliController;