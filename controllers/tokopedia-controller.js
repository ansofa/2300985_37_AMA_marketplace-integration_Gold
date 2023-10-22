const TokopediaService = require("../sevices/tokopedia-service");

const tokopediaService = new TokopediaService();

class TokopediaController {
  async tokopedia(req, res) {
    try {
      const user = req.user
      const profileData = await tokopediaService.getProfile(user.id);
      res.render("tokopedia.ejs", {
        layout: "layouts/main-layout",
        pageTitle: "Tokopedia",
        profiles: profileData,
        user
      });
    } catch (error) {
      console.error(error);
    }
  }

  async storeProfile(req, res) {
    try {
      const payload = req.body;
      const { id } = req.user;
      payload.owner_id = id
      const store = await tokopediaService.storeProfile(payload);

      res.status(201).json({ status: "SUCCESS", store });
    } catch (error) {
      res.status(500).json({
        status: "FAILED",
        error: error.message,
      });
    }
  }

  async updateProfile(req, res) {
    try {
      const payload = req.body;
      const profile_id = req.params.id
      const { id } = req.user;
      payload.owner_id = id
      const store = await tokopediaService.updateProfile(payload, profile_id);

      res.status(201).json({ status: "SUCCESS", store });
    } catch (error) {
      res.status(500).json({
        status: "FAILED",
        error: error.message,
      });
    }
  }

  async fetchProfile(req, res) {
    try {
      const authorization = req.query.authorization;
      const dataProfile = await tokopediaService.fetchProfile(authorization);

      res.status(200).json({ status: "SUCCESS", data: dataProfile });
    } catch (error) {
      res.status(500).json({
        status: "FAILED",
        error: error.message,
      });
    }
  }

  async deleteProfile(req, res) {
    try {
      const id = await tokopediaService.delete(req.params.id);
      res.status(201).json({ success: id });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Gagal menghapus profile." });
    }
  }
}

module.exports = TokopediaController;
