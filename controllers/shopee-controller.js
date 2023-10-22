class ShopeeController {
    async shopee(req, res) {
        res.render("shopee.ejs", {
            layout: 'layouts/main-layout',
            user: req.user
        });
    }
}

module.exports = ShopeeController;