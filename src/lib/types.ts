// Types mirror the myprosperity API v1 Swagger models (sandbox.api.myprosperity.com.au/swagger/docs/v1)

export interface PagedResults<T> {
  PageNumber: number;
  PageSize: number;
  TotalNumberOfPages: number;
  TotalNumberOfRecords: number;
  Results: T[];
}

export interface WealthItemCategory {
  Id: number;
  Name: string;
  Description: string;
  IsAssetWealthItem: boolean;
}

export interface WealthItemSummary {
  ID: number;
  Name: string;
  Value: number;
  Category: WealthItemCategory;
  ComputedValueWithSign: number;
}

export interface Snapshot {
  ID: number;
  NetWorth: number;
  Period: string;
  DateTaken: string;
}

export interface TransactionCategory {
  Id: number;
  Description: string;
  TransactionType: number;
}

export interface CashflowTransactionSummary {
  ID: number;
  AccountName: string;
  Category: TransactionCategory;
  Description: string;
  Date: string;
  Amount: number;
  AmountWithSign: number;
  Reviewed: boolean;
}

export enum GoalStatus {
  OnTrack = 1,
  Behind = 2,
  Achieved = 3,
}

export interface GoalSummary {
  ID: number;
  Name: string;
  Due: string;
  Status: GoalStatus;
  GoalTarget: number;
  Progress: number;
}

export interface ClientDetailsLite {
  ID: number;
  Name: string;
  PersonDetails?: { Email: string; Mobile: string; DateOfBirth: string };
  CompanyDetails?: { Abn: string };
  NetWorth: number;
  LastActive: string;
}

export enum DocumentSigningStatus {
  None = 0,
  Pending = 1,
  Signed = 2,
}

export interface Document {
  ID: number;
  Created: string;
  LastUpdated: string;
  Description: string;
  DocumentType: number;
  DocumentSigningStatus: DocumentSigningStatus;
  CreatedBy: string;
  File: { FileName: string; SizeBytes: number };
}
