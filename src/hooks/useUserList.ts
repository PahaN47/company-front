import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/store';
import { UsersAction, UsersExtraAction } from '~/store/users';

export const useUserList = (minLength: number = 3) => {
    const dispatch = useAppDispatch();
    const { displayList, fetchList, fetchStatus, hasNextPage, currentPage } = useAppSelector((state) => state.users);

    const shouldFetch = displayList.length <= minLength;

    const popUser = useCallback(() => dispatch(UsersExtraAction.popDisplayList()), [dispatch]);

    const getFetchList = useCallback(
        () => void dispatch(UsersAction.getList({ page: currentPage + 1 })),
        [currentPage, dispatch],
    );

    useEffect(() => {
        if (fetchStatus === 'idle' && currentPage === 0) {
            getFetchList();
        }
    }, [getFetchList, fetchStatus, currentPage]);

    useEffect(() => {
        if (shouldFetch && fetchStatus !== 'pending' && hasNextPage) {
            getFetchList();
        }
    }, [getFetchList, fetchStatus, hasNextPage, shouldFetch]);

    useEffect(() => {
        if (fetchStatus === 'fulfilled' && fetchList) {
            dispatch(UsersExtraAction.addToDisplayList(fetchList));
        }
    }, [fetchStatus, fetchList, dispatch]);

    useEffect(
        () => () => {
            dispatch(UsersExtraAction.resetList());
        },
        [dispatch],
    );

    return { popUser, userList: displayList };
};
