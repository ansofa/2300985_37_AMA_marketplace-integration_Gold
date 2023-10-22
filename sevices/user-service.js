const { user } = require('../models');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.userModel = user;
    }
    async store(payload) {
        const date = new Date();
        const { user_name, email, password } = payload;
        const encript = await bcrypt.hash(password, 10);
        
        // Simpan data pengguna ke database
        const data = await this.userModel.create({ user_name, email, password: encript, createdAt: date, updatedAt: date });
        return data;
    }
}

module.exports = UserService;