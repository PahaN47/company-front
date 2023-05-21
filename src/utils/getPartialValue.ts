export const getPartialValue = <T = Record<string, unknown>>(object: T) => {
    const result: Partial<T> = {};

    for (const key in object) {
        const value = object[key];
        if (value != null && value !== '') {
            result[key] = object[key];
        }
    }

    return result;
};
