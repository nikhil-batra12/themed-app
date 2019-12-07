const aclConfig = {
  guest: {
    view: ['NO_LOGIN_STATE']
  },
  user: {
    view: ['SIDEBAR', 'USER_VIEW', 'PROFILE']
  },
  admin: {
    view: ['SIDEBAR', 'ADMIN_PANEL', 'PROFILE']
  }
};

export default aclConfig;