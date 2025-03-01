import emailReceiverGroupSlice from '@/redux/slices/nms/emailReceiverGroup/slice';
import categorySlice from '@/redux/slices/nms/category/slice';
import subCategorySlice from '@/redux/slices/nms/subCategory/slice';
import notificationSlice from '@/redux/slices/nms/notification/slice';
import notificationReceiverSlice from '@/redux/slices/nms/notificationReceiver/slice';
import userGroupMemberSlice from '@/redux/slices/nms/userGroupMember/slice';
import userGroupNMSSlice from '@/redux/slices/nms/userGroup/slice';
import emailTemplateSlice from '@/redux/slices/nms/emailTemplate/slice';
import emailLogSlice from '@/redux/slices/nms/email-log/slice';


export const nms = {
  emailReceiverGroupSlice,
  categorySlice,
  subCategorySlice,
  notificationSlice,
  notificationReceiverSlice,
  userGroupMemberSlice,
  userGroupNMSSlice,
  emailTemplateSlice,
  emailLogSlice,
};
