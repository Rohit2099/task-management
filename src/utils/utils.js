import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export function debounce(fnToDebounce, delay) {
    let id = null;

    return function (...args) {
        clearTimeout(id);
        id = setTimeout(() => {
            fnToDebounce(...args);
        }, delay);
    };
}

export function loadAllSolidIcons() {
    library.add(fas);
}
