import resourceGroupSlice from '@/slices/ums/resourceGroup/slice';
import resourceSlice from '@/slices/ums/resource/slice';
import userGroupSlice from '@/slices/ums/userGroup/slice';
import userGroupPrivilegesSlice from '@/slices/ums/userGroupPrivileges/slice';
import modulesSlice from '@/slices/ums/module/slice';
import pageLevelsSlice from '@/slices/ums/pageLevel/slice';
import pagesSlice from '@/slices/ums/page/slice';
import clientSlice from '@/slices/ums/client/slice';
import userSlice from '@/slices/ums/user/slice';
import userGroupMembershipSlice from '@/slices/ums/userGroupMembership/slice';
import resourceAccessSlice from '@/slices/ums/resourceAccess/slice';

export const ums = {
  resourceGroupSlice,
  resourceSlice,
  userGroupSlice,
  userGroupPrivilegesSlice,
  modulesSlice,
  pageLevelsSlice,
  pagesSlice,
  clientSlice,
  userSlice,
  userGroupMembershipSlice,
  resourceAccessSlice,
};
