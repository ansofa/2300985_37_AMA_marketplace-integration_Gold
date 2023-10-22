const UserService = require("../sevices/user-service");
const userService = new UserService();

class UserController {
  indexRegister(req, res) {
    res.render("register", {
      layout: "register",
      pageTitle: "Registration"
    });
  }

  indexLogin(req, res) {
    res.render("login", { layout: "login"});
  }

  async indexDashboard(req, res) {
    res.render("index", {
        layout: 'layouts/main-layout',
        user: req.user
    });
}

  async register(req, res) {
    try {
      await userService.store(req.body);
      // Tampilkan pesan sukses atau respons yang sesuai
      res.status(201).json({ message: "Registrasi berhasil" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Registrasi gagal" });
    }
  }
}

module.exports = UserController;
