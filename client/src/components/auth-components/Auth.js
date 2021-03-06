/* eslint-disable no-restricted-globals */
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "../../auth/auth0-variables";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/dashboard";
const LOGIN_SUCCESS_ADMIN = "/admin";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        responseType: "token id_token",
        scope: "openid profile"
    });

    constructor() {
        this.login = this.login.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    };

    login() {
        this.auth0.authorize();
    };

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        location.pathname = LOGIN_FAILURE_PAGE;
    };

    handleAuthentication() {
        this.auth0.parseHash((error, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";

                const role = this.getUserRole();

                if (role === "admin") {
                    location.pathname = LOGIN_SUCCESS_ADMIN;
                }
                else if (role === "client") {
                    location.pathname = LOGIN_SUCCESS_PAGE;
                }

            } else if (error) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(error);
            }
        })
    };

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    };

    getAuth() {
        let value = this.isAuthenticated();
        console.log(value);
        return value;
    };

    getProfile() {
        if (localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"))
        } else {
            return {};
        }
    };

    getUserRole() {
        let currentUser = this.getProfile();
        let valuesArray = Object.values(currentUser);
        let userRole = valuesArray[0];
        return (userRole.role);
    }
    getAcctNum() {
        let currentUser = this.getProfile();
        let valuesArray = Object.values(currentUser);
        let acctNum = valuesArray[0];
        return (acctNum.acctNum);
    };
};
