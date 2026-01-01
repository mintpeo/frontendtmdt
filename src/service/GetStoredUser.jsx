import { INFO_USER } from "./API_URL.jsx";

export const GetStoredUser = () => {
    const INFOUSER = INFO_USER;
    const saved = localStorage.getItem(INFOUSER);
    if (!saved) return;

    try {
        return JSON.parse(saved); // array -> object
    } catch (error) {
        return console.log("ERROR GetStoreUser: ", error);
    }
};