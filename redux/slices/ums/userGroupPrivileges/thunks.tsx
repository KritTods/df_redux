import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'wcf-component-lib/src/utils/apiServerSide';

import { sliceName } from './types';

export const getUserGroupPrivilegesList = createAsyncThunk(
  `${sliceName}/list`,
  async ({ userGroupId }: { userGroupId: number }) => {
    return callApi({
      method: 'post',
      url: `user-groups/${userGroupId}/user-group-privileges/list`,
    });
  },
);

export const addPrivileges = createAsyncThunk(
  `${sliceName}/add`,
  async ({ data, userGroupId }: { data: { pageLevelId: number }; userGroupId: number }) => {
    return callApi({
      method: 'post',
      url: `user-groups/${userGroupId}/user-group-privileges/add`,
      body: data,
    });
  },
);

export const deletePrivileges = createAsyncThunk(
  `${sliceName}/delete`,
  async ({ userGroupId, pageLevelId }: { userGroupId: number; pageLevelId: number }) => {
    return callApi({
      method: 'delete',
      url: `user-groups/${userGroupId}/user-group-privileges/remove?pageLevelId=${pageLevelId}`,
    });
  },
);
