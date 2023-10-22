class TokopediaDTO {
  constructor(dataProfile) {
    this.data = dataProfile.data;
  }

  async mappingProfileData() {
    const newDataProfile = {
      name: this.data.user.name,
      isLoggedIn: this.data.user.isLoggedIn,
      phone: this.data.user.phone,
      ovoCash: this.data.wallet.ovoCash,
      saldoTokopedia: this.data.balance.depositStr,
      statusMember: this.data.tokopoints.status.tier.nameDesc,
    };
    return newDataProfile;
  }
}

module.exports = TokopediaDTO;
