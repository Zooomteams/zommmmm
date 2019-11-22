import * as c from '../assets/constant.json';
////console.log("constant file",c);

export const AppConstant = Object.freeze({
  APP: {
    MODULE_NAME: 'ZoomTeams-CpMp'
  },
  API_ENDPOINT: 'https://b8044154.ngrok.io/api/KB/',
  UI_MP_ORGIN: 'https://ZoomTeams.com/',
  UI_UP_ORGIN: 'http://localhost:52718/',
  UI_UP_SUBORGIN: '/up/',
  FILE_LOCATION: {
    base: "wwwroot",
    ConnectionFilesPath: "StaticFiles/ConnectionFiles/HTML/",
    DocumentFilePath: "StaticFiles/TempFiles/Documents/",
    Connection: "XML",
  },
  ENCRYPTDECRIYPTKEY: 'moc.mooz-smaet-key',
  API_CONFIG: {
    APP_CONTENT: {
      APP_NAME: 'ZoomTeams',
      APP_DESC: 'ZoomTeams',
    },
    LOCALSTORAGE: {
      STR_PREFIX: 'zoom-',
      STR_PREFIX_UP: 'zoom-',
      ISMOBILEDEV : 'ismobileDevice',
      TOKEN: 'token',
      TOKEN_TYPE: 'token_type',
      TOKEN_EXPIRES: "expires_in",
      ROLE: "rl",
      USERINFO: "userinfo",
      APPSETTING: 'appsettings',
      CompanyId: "companyId",
      COMPANYINFO: "companyinfo",
      PREFERENCESETTINGS: "preferenceSettings",
      EMPINFOID: "empinfoid",
      SELCTEDEMPNAME: "selectedempname",
    },
    M_ACCOUNT_URL: 'V1/account/',
    M_CONNECT_URL: 'connect/',
    M_BASE_URL: 'api/',
    IDENTITY_CONFIG: {
      GRAND_TYPE: "password",
      SCOPE: "api1 openid",
      CLIENTID: "ro.angular",
      CLIENTSECRET: "secret"
    },
    HEADER_CONTENT_TYPE: {
      FORM_URL_ENCODE: 'application/x-www-form-urlencoded;charset=utf-8;',
      APPLICATION_JSON: 'application/json',
    },
    DATE: {
      format1: 'dd-MM-yyyy',
      apiFormat: 'YYYY-MM-DD',  // A valid moment js data format. Refer https://momentjs.com/docs/#/parsing/string-format/
      displayFormat: 'DD-MM-YYYY',
      sqlDateFormat: 'DD-MM-YYYY',
      dotnetDateFormat: 'MM/DD/YYYY',
      dotnetFullDateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    ANG_DATE: {
      displaydtime: 'dd-MMM-yyyy HH:mm',
      displayMediumFormat: 'MMM d, y, h:mm:ss a',
      displayFormat: 'dd-MM-y', // 01-31-2019 y-MM-dd
      apiFormat: 'y-MM-dd',
      apiTSFormat: 'y-MM-dd HH:mm',

    },
    EmployeeCategory: {
      MANAGER: 1,
    },
    API_URL: {
      UP_Login: "token",
      UP_userinfo: "userinfo",
      // iconPath: "StaticFiles/icons/",
      iconPath: "ZoomTeams/",
      iconsizeLimit: 20480,//4 kb
      iconDimLimit: 100,//4 kb
      photoPath: "UserPhotos/",
      photosizeLimit: 102400,//102 kb
      photoDimLimit: 600,//600 pixels
      account: {
        BASE: "Account",
        REGISTER: "/register",
        LOGOUT: "/logout",
        LOGIN: "/login",
        FORGOT: "/forgot",
        RESET: "/reset"
      },
      KNOWLEDGE: {
        FETCHARTICLEBYID:'GetKBArticlesById?ArticleId=',
        GETARTICLEBYID: "GetArticles?getall=0&categ=",
        GETCATEGORIES: "GetCategories",
        READMORE: 'GetReadArticle',
        INSERTARTICLE: "InsertUpdateKBAricles",
        SEARCHARTICLE: "GetArticles?getall=0&categ=&Page=1&SearchString=",
         SEARCHARTICLE1:'GetArticles?getall=0&categ=&Page=1&SearchString=',
        GETALLARTICLE: "GetArticles?getall=0&categ=",
        GETADMINARTICLES:'GetArticles?getall=1&categ=1',
        PAGINATION:'GetArticles?getall=0&'
      },
    }
  }
});
