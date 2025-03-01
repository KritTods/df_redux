import { DistrictItem } from '@/redux/slices/mdm/district';
import { ItemList as SubDistrict } from '@/redux/slices/mdm/subDistrict';
import { ItemList as Postal } from '@/redux/slices/mdm/postal';
export const sliceName = 'cmp-compensation-addressForSendDocumentIssue-sendDocument';

// * -- Initial State --

export interface DataForm {
  sendDocumentHouseNum: string;
  sendDocumentRoad: string;
  sendDocumentSoi: string;
  sendDocumentTambol: string;
  sendDocumentAmphur: string;
  sendDocumentProvince: string;
  sendDocumentPostcode: string;
  sendDocumentMoo: string;
}
export interface StateProp {
  district: {
    loading: boolean;
    addressSendDocumentDistrictsList: DistrictItem[] | [];
  };
  subDistrict: {
    loading: boolean;
    addressSendDocumentSubDistrictsList: SubDistrict[] | [];
  };
  postal: {
    loading: boolean;
    addressSendDocumentPostalList: Postal[] | [];
  };
  temporary: {
    district: {
      loading: boolean;
      addressSendDocumentDistrictsList: DistrictItem[] | [];
    };
    subDistrict: {
      loading: boolean;
      addressSendDocumentSubDistrictsList: SubDistrict[] | [];
    };
    postal: {
      loading: boolean;
      addressSendDocumentPostalList: Postal[] | [];
    };
    dataForm: DataForm;
  };
}

export const initialState: StateProp = {
  district: {
    loading: false,
    addressSendDocumentDistrictsList: [],
  },
  subDistrict: {
    loading: false,
    addressSendDocumentSubDistrictsList: [],
  },
  postal: {
    loading: false,
    addressSendDocumentPostalList: [],
  },
  temporary: {
    district: {
      loading: false,
      addressSendDocumentDistrictsList: [],
    },
    subDistrict: {
      loading: false,
      addressSendDocumentSubDistrictsList: [],
    },
    postal: {
      loading: false,
      addressSendDocumentPostalList: [],
    },
    dataForm: {
      sendDocumentHouseNum: '',
      sendDocumentRoad: '',
      sendDocumentSoi: '',
      sendDocumentTambol: '',
      sendDocumentAmphur: '',
      sendDocumentProvince: '',
      sendDocumentPostcode: '',
      sendDocumentMoo: '',
    },
  },
};
