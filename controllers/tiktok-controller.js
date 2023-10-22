class TiktokController {
    async tiktok(req, res) {
        res.render("tiktok.ejs", {
            layout: 'layouts/main-layout',
            user: req.user
        });
    }
}

module.exports = TiktokController;