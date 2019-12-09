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
      sliderimages: `${apiServer}/api/product/sliderimages`,
      submitEnquiry: `${apiServer}/api/product/submitenquiry`,
      getProduct: `${apiServer}/api/getProduct`,
      addProduct: `${apiServer}/api/addProduct/`,
      updateProduct: `${apiServer}/api/updateProduct/`,
      deleteProduct: `${apiServer}/api/deleteProduct/:productId`
    },
    orders: {
      getOrder: `${apiServer}/api/getOrder/`,
      addOrder: `{apiServer}/api/addOrder/`,
      updateOrder: `{apiServer}/api/updateOrder/`,
      deleteOrder: `{apiServer}/api/deleteOrder/:orderId`,
    },
    customers: {
      getCustomer: `${apiServer}/api/getCustomer/`,
      addCustomer: `${apiServer}/api/addCustomer/`,
      updateCustomer: `${apiServer}/api/updateCustomer/`,
      deleteCustomer: `${apiServer}/api/deleteCustomer/:customerId`
    }
  };
}
