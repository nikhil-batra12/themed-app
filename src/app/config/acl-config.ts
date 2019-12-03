const aclConfig = {
  guest: {
    view: ['NO_LOGIN_STATE']
  },
  user: {
    view: ['SIDEBAR', 'USER_VIEW']
  },
  admin: {
    view: ['SIDEBAR', 'ADMIN_PANEL']
  }
};

export default aclConfig;