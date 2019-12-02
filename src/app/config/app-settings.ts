import { environment } from './../../environments/environment';

const apiServer = environment.serverPath;
const currentApiServer = environment.currentServerPath;

export class AppSettings {
    public static apiEndpoints = {
        user: {
            login: `${apiServer}/api/user/login`,
            details: `${apiServer}/api/user/details`,
        },
        products: {
            list: `${currentApiServer}/api/get-products`,
            sliderimages: `${apiServer}/api/product/sliderimages`,
            submitEnquiry: `${apiServer}/api/product/submitenquiry`
        }
    };
}
