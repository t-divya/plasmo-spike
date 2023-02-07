import { createContext } from "react";

export type AppData = {
    enabled: Boolean,
    text: {
        enabled: Boolean,
        fontFamily?: string,
        textColor?: string
    },
    overlay: {
        enabled: Boolean,
        opacity: number,
        color: string
    },
    lineFocus: {
        enabled: Boolean,
        color: string,
        height: number,
        opacity: number

    }


}