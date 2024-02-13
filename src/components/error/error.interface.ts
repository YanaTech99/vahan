/**
@file error.interface.ts
@description error interface
 */
import {AxiosRequestConfig} from 'axios';
import {ToasterType} from '../../store/store.interface';

export enum ErrorType {
  FATAL = 'FATAL',
  GENERIC = 'GENERIC',
}
export interface ErrorAttributes extends Omit<Error, 'name'> {
  name?: string;
  type: ErrorType;
  message: string;
  showToast?: boolean;
  ToasterType: ToasterType;
  code?: string | number;
  url?: string;
  metadata?: Record<string, string> | string | AxiosRequestConfig;
  componentName: string;
}

export type metaDataUnion =
  | Record<string, string>
  | string
  | AxiosRequestConfig
  | undefined;
