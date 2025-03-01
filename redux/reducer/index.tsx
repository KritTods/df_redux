import { adm } from './adm';
import { cmp } from './cmp';
import { mdm } from './mdm';
import { nms } from './nms';
import { reg } from './reg';
import { ssoData } from './ssoData';
import { ums } from './ums';
import { med } from './med';
import { cons } from './cons';

const reducer = {
  ...adm,
  ...cmp,
  ...mdm,
  ...reg,
  ...ssoData,
  ...ums,
  ...mdm,
  ...nms,
  ...med,
  ...cons,
};

export default reducer;
