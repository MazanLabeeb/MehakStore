export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type ActionWithoutPayload<T> = {
    type: T;
}

// when function is called with one input parameter "Type" onlyy
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// when function is called with one both parameters "Type" & "payload"
export function createAction<T extends string, P>(type: T, payload: void): ActionWithoutPayload<T>;

// now define the function with traditional style
export function createAction<T extends string, P>(type: T, payload: P) {
    return {
        type, payload
    }
}