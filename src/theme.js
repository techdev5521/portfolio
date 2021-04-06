import purple from '@material-ui/core/colors/purple';
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
                primary: {
                    main: purple[500],
                },
                secondary: {
                    main: '#f44336',
                },
                "type": darkMode ? "dark" : "light",
            },
        })
    );
}