const initStore = {
    conditions: []
}

const picListStore = (state = initStore, action) => {
    switch (action.type) {
        case 'pic-list-conditions':
            return {
                ...state,
                conditions: action.value
            };
        case 'get-pic-list':
            return {
                ...state,
                picListData: action.value
            };
        default:
            return state;
    }
}

export default picListStore;