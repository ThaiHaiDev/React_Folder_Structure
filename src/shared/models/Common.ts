export enum CRUDAction {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export enum StatusCode {
  Active = 'active',
  Inactive = 'inactive',
  Disabled = 'disabled',
  Deleted = 'deleted',
  Deactivate = 'deactivate',
  Suspended = 'suspended',
  Blocked = 'blocked',
  Unavailable = 'unavailable',
  Availability = 'availability',
  Available = 'available',
  Pending = 'pending',
}

export interface IFilterInput {
  key: string;
  value: any | IFilterInput[];
  name?: string | any;
  isSingleCheckbox?: boolean;
  isSearch?: boolean;
  slotName?: string;
  dataType?: 'text' | 'dateRange';
}

export interface IPagingParams {
  totalPages?: number;
  page: number;
  total?: number;
  order?: string;
  descending?: boolean;
}

export const ItemPage: any[] = [
  {
    value: 10,
    label: '1 - 10',
  },
  {
    value: 20,
    label: '1 - 20',
  },
  {
    value: 50,
    label: '1 - 50',
  },
];

export interface IAddress {
  ward: string;
  address: string;
  district: string;
  province: string;
}

export const addressDefault = (): IAddress => {
  return {
    district: '',
    province: '',
    address: '',
    ward: '',
  };
};

export const TimezoneVN = 'Asia/Ho_Chi_Minh';
export const FORMAT_DATE_TIME = 'YYYY-MM-DD HH:mm:ss';
export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_HOUR = 'HH:mm:ss';
export const FORMAT_DATE_REVERSE = 'DD/MM/YYYY';
export const FORMAT_DATE_MONTH = 'DD/MM';

export enum LangType {
  En = 'en',
  Vi = 'vi',
}

export enum LocalStorageKey {
  LocalVN = 'LANGUAGE_ACTIVE',
}
