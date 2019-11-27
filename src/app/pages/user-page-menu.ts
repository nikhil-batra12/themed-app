import { NbMenuItem } from '@nebular/theme';
import * as constants from './constants';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Products',
    icon: 'car-outline',
    link: '/pages/dashboard',
    home: true
  },{
    title: 'Orders',
    icon: 'shopping-cart-outline',
    link: '/pages/orders',
  },{
    title: 'Account Settings',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Forgot Password',
        link: '/pages/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/pages/auth/reset-password',
      }
    ],
  },
  {
    title: 'About Us',
    icon: 'info-outline',
    link: '/pages/about-us',
  },{
    title: 'Contact Us',
    icon: 'phone-call-outline',
    link: '/pages/contact',
  }];
