const initialUserState = { name: null, email: null, token: null };

export default (state = initialUserState, action) => {
    const cases = {
        LOGIN: { ...state, ...action.payload }
    }
    return cases[action.type] ? cases[action.type] : state;
}