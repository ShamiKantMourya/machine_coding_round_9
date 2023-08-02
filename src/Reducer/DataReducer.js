export const initial_state = {
    notes: [],
}

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "add_notes":
            return {
                ...state,
                notes: [...state.notes, payload]
            };
        default:
            return state;
    }

};