class DashboardController {
    async index(req, res) {
        res.render("index.ejs", {
            layout: 'layouts/main-layout',
            user: req.user
        });
    }
}

module.exports = DashboardController