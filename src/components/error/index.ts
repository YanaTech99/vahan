/**
@file index.ts
@description Error object
 */
import { ToasterType } from '../../store/store.interface';
import {ErrorAttributes, ErrorType, metaDataUnion} from './error.interface';

export class ErrorObject extends Error {
  private readonly attributes: ErrorAttributes;

  constructor(error: ErrorAttributes) {
    super(error.message);
    this.attributes = error;
  }

  public get message(): string {
    return this.attributes.message || 'Generic';
  }

  public get type(): ErrorType {
    return this.attributes.type;
  }

  public get componentName(): string {
    return this.attributes.componentName;
  }
  public get code(): string | number | undefined {
    return this.attributes.code;
  }

  public get showToast(): boolean | undefined {
    return this.attributes.showToast;
  }

  public get ToasterType(): ToasterType | undefined {
    return this.attributes.ToasterType;
  }

  public get url(): string | undefined {
    return this.attributes.url;
  }
  public get metadata(): metaDataUnion {
    return this.attributes.metadata;
  }
}
