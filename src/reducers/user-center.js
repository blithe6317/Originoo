const initStore = {
    selectedMenuKey: ['center']
}

const userCenterStore = (state = initStore, action) => {
    switch (action.type) {
        case 'user-center-menu-change':
            return {
                ...state,
                selectedMenuKey: action.value
            };
        case 'get-user-new-download-info':
            return {
                ...state,
                userNewDownloadInfo: action.value
            };
        default:
            return state;
    }
}

export default userCenterStore;