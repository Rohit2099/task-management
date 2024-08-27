export function debounce(fnToDebounce, delay) {
    let id = null;

    return function (...args) {
        clearTimeout(id);
        id = setTimeout(() => {
            fnToDebounce(...args);
        }, delay);
    };
}
