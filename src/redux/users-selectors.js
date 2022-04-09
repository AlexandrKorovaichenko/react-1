import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.user.users;
}

export const getUsers = createSelector (getUsersSelector, (user) => {
    //debugger;
    return user.filter(u => true);
});

/*export const getUsers = (state) => {
    debugger;
    return state.user;
}*/


export const getPageSize = (state) => {
    return state.user.pageCount;
}


export const getTotalUsersCount = (state) => {
    //debugger;
    return state.user.totalUsersCount;
}


export const getCurrentPage = (state) => {
    return state.user.currentPage;
}


export const getIsFetchin = (state) => {
    //debugger;
    return state.user.isFetching;
}

export const getFollowVisible = (state) => {
    //debugger;
    return state.user.followVisible;
}
