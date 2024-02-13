export interface ApiServiceTypes {
  sendOtp: (data: ISendOtpRequest) => Promise<ISendOtpResponse>;
  verifyOtp: (data: IVerifyOtpRequest) => Promise<IVerifyOtpResponse>;
  checkUsernameAvailability: (data: IUsername) => Promise<ApiResponse<IUsername>>;
  createUsername: (data: ICreateUsernameRequest) => Promise<ICreateUsernameResponse>;
}

export interface ApiResponse<TData> {
  error: boolean;
  status: number;
  data: TData;
}

export interface ApiError {
  error: boolean;
  status: number;
  message: string;
}

export interface ISendOtpRequest {
  country: string;
  mobile: string;
}

export type ISendOtpResponse = ApiResponse<{
  id: string;
  mobile: string;
}>;

export interface IVerifyOtpRequest {
  country: string;
  mobile: string;
  code: string;
}

export type IVerifyOtpResponse = ApiResponse<{
  id: string;
  mobile: string;
  exists: boolean;
  verified: boolean;
  username?: string;
}>;

export interface IUsername {
  username: string;
}

export interface ICreateUsernameRequest extends IUsername {
  id: string;
}

export type ICreateUsernameResponse = ApiResponse<{
  username: string;
  country: string;
  mobileNumber: string;
  token: {
    token: string;
    expiresIn: number; // milliseconds
  };
}>;
