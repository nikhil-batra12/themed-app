import { NbMenuItem } from '@nebular/theme';
// import * as constants from './constants';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Products',
    icon: 'car-outline',
    link: '/pages/admin-dashboard/products',
    home: true
  },{
    title: 'Orders',
    icon: 'shopping-cart-outline',
    link: '/pages/admin-dashboard/orders',
  },{
    title: 'Customers',
    icon: 'person-outline',
    link: '/pages/admin-dashboard/customers',
  },{
    title: 'Account Settings',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Forgot Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      }
    ],
  },
  {
    title: 'About Us',
    icon: 'info-outline',
    link: '/pages/user-dashboard/about-us',
  },{
    title: 'Contact Us',
    icon: 'phone-call-outline',
    link: '/pages/user-dashboard/contact',
  }];
