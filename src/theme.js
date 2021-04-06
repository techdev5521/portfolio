import { deepPurple, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles'

/**
 * Returns custom MUI Theme.
 * @example
 * import webqueue2Theme from "./theme";
 * const theme = webqueue2Theme(darkMode);
 * @param {boolean} [darkMode=false] Whether theme should be dark or not.
 * @returns {Theme} MUI Theme.
 */
export default function theme(darkMode = false) {
    return (
        createMuiTheme({
            "palette": {
                "type": darkMode ? "dark" : "light",
            },
        })
    );
}