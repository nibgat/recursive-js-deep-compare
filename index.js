const recursiveJSDeepCompare = (first, second) => {
    if (typeof first !== typeof second) return false;
    if (Array.isArray(first)) {
        if (first.length !== second.length) return false;
        if (first.length === 0 && second.length === 0) return true;
        return first.findIndex((p_array_item, p_array_index) => !recursiveJSDeepCompare(p_array_item, second[p_array_index])) === -1;
    }
    if (typeof first === "object" && first !== null) {
        if (second === null) return first === second;
        const firstKeys = Object.keys(first);
        const secondKeys = Object.keys(second);

        if (firstKeys.length !== secondKeys.length) return false;
        if (firstKeys.length === 0 && secondKeys.length === 0) return false;
        return firstKeys.findIndex(key_item => !recursiveJSDeepCompare(first[key_item], second[key_item])) === -1;
    }
    return first === second;
};

export default recursiveJSDeepCompare;