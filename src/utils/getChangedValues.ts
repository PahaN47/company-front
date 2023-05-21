export const getChangedValues = <T = Record<string, unknown>>(new_object: Partial<T>, old_object: T) => {
    const result: Partial<T> = {};
    for (const key in new_object) {
        if (new_object[key] != old_object[key]) {
            result[key] = new_object[key];
        }
    }
    return result;
};
