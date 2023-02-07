import type { AppData } from "~Storage/StoreContext";
import { createContext } from "react";

export const initialState: AppData = {
    enabled: false,
    text: {
        enabled: false,
        textColor: undefined,
        fontFamily: 'OpenDyslexic',
    },
    overlay: {
        enabled: false,
        color: "red",
        opacity: 0.5
    },
    lineFocus: {
        enabled: false,
        color: "blue",
        opacity: 0.5,
        height: 100
    }

}
type AppState = {
    appData: AppData,

}


