import { environment } from "./../../environments/environment";

const apiServer = environment.serverPath;
const currentApiServer = environment.currentServerPath;

export class AppSettings {
  public static apiEndpoints = {
    user: {
      login: `${apiServer}/api/user/login`,
      details: `${apiServer}/api/user/details`
    },
    products: {
      list: `${currentApiServer}/api/get-products`,
      sliderimages: `${apiServer}/api/product/sliderimages`,
      submitEnquiry: `${apiServer}/api/product/submitenquiry`,
      addProduct: "{apiServer}/api/addProduct/",
      saveProduct: "{apiServer}/api/saveProduct/"
    },
    orders: {
      getOrders: "{apiServer}/api/getOrders/",
      addOrder: "{apiServer}/api/addOrder/",
      saveOrder: "{apiServer}/api/saveOrder/"
    },
    customers: {
      getCsutomers: "{apiServer}/api/getCustomers/",
      addCustomer: "{apiServer}/api/addCustomer/",
      saveCustomer: "{apiServer}/api/saveCustomer/"
    }
  };
}
