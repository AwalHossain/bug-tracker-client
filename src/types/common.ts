export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode?: number;
  message: string;
  errorMessages?: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type QueryError = {
  data: IGenericErrorResponse;
  status: number;
};

export interface Workspace {
  id: string;
  name: string;
}
