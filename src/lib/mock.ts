import {
  CashflowTransactionSummary,
  ClientDetailsLite,
  Document,
  DocumentSigningStatus,
  GoalStatus,
  GoalSummary,
  PagedResults,
  Snapshot,
  WealthItemSummary,
} from "./types";

const cat = (Id: number, Name: string, IsAssetWealthItem: boolean) => ({
  Id,
  Name,
  Description: Name,
  IsAssetWealthItem,
});

export const wealthItems: WealthItemSummary[] = [
  { ID: 1, Name: "Family home — Mosman", Value: 3_250_000, Category: cat(1, "Home", true), ComputedValueWithSign: 3_250_000 },
  { ID: 2, Name: "Investment unit — Newtown", Value: 980_000, Category: cat(2, "Investment property", true), ComputedValueWithSign: 980_000 },
  { ID: 3, Name: "AustralianSuper", Value: 642_300, Category: cat(3, "Superannuation", true), ComputedValueWithSign: 642_300 },
  { ID: 4, Name: "CommSec share portfolio", Value: 218_450, Category: cat(4, "Shares", true), ComputedValueWithSign: 218_450 },
  { ID: 5, Name: "ANZ Progress Saver", Value: 86_200, Category: cat(5, "Bank account", true), ComputedValueWithSign: 86_200 },
  { ID: 6, Name: "Tesla Model Y", Value: 61_000, Category: cat(6, "Vehicle", true), ComputedValueWithSign: 61_000 },
  { ID: 7, Name: "Home loan — CBA", Value: 1_420_000, Category: cat(10, "Mortgage", false), ComputedValueWithSign: -1_420_000 },
  { ID: 8, Name: "Investment loan — Macquarie", Value: 610_000, Category: cat(11, "Investment loan", false), ComputedValueWithSign: -610_000 },
  { ID: 9, Name: "Amex Platinum", Value: 7_840, Category: cat(12, "Credit card", false), ComputedValueWithSign: -7_840 },
];

export const snapshots: Snapshot[] = Array.from({ length: 24 }, (_, i) => {
  const d = new Date(2024, 8 + i, 1);
  const base = 2_650_000 + i * 21_500 + Math.sin(i / 2) * 38_000;
  return { ID: i + 1, NetWorth: Math.round(base), Period: d.toISOString(), DateTaken: d.toISOString() };
});

const tx = (
  ID: number,
  daysAgo: number,
  Description: string,
  AccountName: string,
  category: string,
  Amount: number,
  Reviewed = true,
): CashflowTransactionSummary => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return {
    ID,
    AccountName,
    Description,
    Date: d.toISOString(),
    Amount: Math.abs(Amount),
    AmountWithSign: Amount,
    Reviewed,
    Category: { Id: ID, Description: category, TransactionType: Amount < 0 ? 1 : 0 },
  };
};

export const transactions: CashflowTransactionSummary[] = [
  tx(1, 0, "Woolworths Neutral Bay", "ANZ Progress Saver", "Groceries", -186.42, false),
  tx(2, 1, "Salary — Atlassian", "ANZ Progress Saver", "Salary", 9_840.0),
  tx(3, 1, "CBA home loan repayment", "ANZ Progress Saver", "Mortgage", -6_120.0),
  tx(4, 2, "Origin Energy", "Amex Platinum", "Utilities", -312.9, false),
  tx(5, 3, "Rent received — Newtown", "ANZ Progress Saver", "Rental income", 3_150.0),
  tx(6, 4, "Uber Eats", "Amex Platinum", "Dining", -64.5),
  tx(7, 5, "Bupa health insurance", "Amex Platinum", "Insurance", -428.0),
  tx(8, 6, "Sydney Water", "ANZ Progress Saver", "Utilities", -218.35),
  tx(9, 7, "Netflix", "Amex Platinum", "Entertainment", -22.99),
  tx(10, 8, "Macquarie loan interest", "ANZ Progress Saver", "Investment loan", -2_890.0),
  tx(11, 9, "Dividend — CBA", "CommSec", "Dividends", 1_240.0),
  tx(12, 11, "Chemist Warehouse", "Amex Platinum", "Health", -48.7, false),
  tx(13, 12, "Qantas", "Amex Platinum", "Travel", -1_186.0),
  tx(14, 14, "Council rates — Mosman", "ANZ Progress Saver", "Property costs", -742.0),
  tx(15, 15, "Salary — Atlassian", "ANZ Progress Saver", "Salary", 9_840.0),
];

export const goals: GoalSummary[] = [
  { ID: 1, Name: "Pay down home loan to $1.2m", Due: "2027-06-30", Status: GoalStatus.OnTrack, GoalTarget: 1_200_000, Progress: 0.58 },
  { ID: 2, Name: "Europe trip fund", Due: "2026-12-15", Status: GoalStatus.Behind, GoalTarget: 30_000, Progress: 0.41 },
  { ID: 3, Name: "Emergency fund — 6 months", Due: "2026-03-01", Status: GoalStatus.Achieved, GoalTarget: 60_000, Progress: 1 },
  { ID: 4, Name: "Super balance $1m", Due: "2032-07-01", Status: GoalStatus.OnTrack, GoalTarget: 1_000_000, Progress: 0.64 },
  { ID: 5, Name: "Kids' education fund", Due: "2030-01-31", Status: GoalStatus.OnTrack, GoalTarget: 120_000, Progress: 0.33 },
];

export const clients: ClientDetailsLite[] = [
  { ID: 101, Name: "Sarah & James Whitfield", PersonDetails: { Email: "sarah.w@example.com", Mobile: "0412 555 019", DateOfBirth: "1981-04-12" }, NetWorth: 3_199_110, LastActive: "2026-09-08" },
  { ID: 102, Name: "Whitfield Family Trust", CompanyDetails: { Abn: "51 824 753 556" }, NetWorth: 1_420_000, LastActive: "2026-09-02" },
  { ID: 103, Name: "Priya Raman", PersonDetails: { Email: "priya@example.com", Mobile: "0433 118 204", DateOfBirth: "1990-11-03" }, NetWorth: 486_900, LastActive: "2026-09-07" },
  { ID: 104, Name: "Tom Nguyen", PersonDetails: { Email: "tom.nguyen@example.com", Mobile: "0401 772 380", DateOfBirth: "1975-02-27" }, NetWorth: 2_012_400, LastActive: "2026-08-29" },
  { ID: 105, Name: "Nguyen Holdings Pty Ltd", CompanyDetails: { Abn: "33 102 998 416" }, NetWorth: 5_680_000, LastActive: "2026-08-21" },
  { ID: 106, Name: "Eleanor Hart", PersonDetails: { Email: "e.hart@example.com", Mobile: "0422 090 771", DateOfBirth: "1958-07-19" }, NetWorth: 1_875_300, LastActive: "2026-09-09" },
];

export const documents: Document[] = [
  { ID: 1, Created: "2026-09-05", LastUpdated: "2026-09-05", Description: "FY26 Individual Tax Return — Sarah", DocumentType: 1, DocumentSigningStatus: DocumentSigningStatus.Pending, CreatedBy: "Harbour Wealth Advisers", File: { FileName: "FY26_ITR_Sarah.pdf", SizeBytes: 482_000 } },
  { ID: 2, Created: "2026-08-28", LastUpdated: "2026-08-30", Description: "Statement of Advice — Super consolidation", DocumentType: 2, DocumentSigningStatus: DocumentSigningStatus.Signed, CreatedBy: "Harbour Wealth Advisers", File: { FileName: "SoA_Super_2026.pdf", SizeBytes: 1_240_000 } },
  { ID: 3, Created: "2026-08-14", LastUpdated: "2026-08-14", Description: "Home & contents policy renewal", DocumentType: 3, DocumentSigningStatus: DocumentSigningStatus.None, CreatedBy: "Sarah Whitfield", File: { FileName: "NRMA_Renewal.pdf", SizeBytes: 218_000 } },
  { ID: 4, Created: "2026-07-30", LastUpdated: "2026-07-30", Description: "Family Trust deed", DocumentType: 4, DocumentSigningStatus: DocumentSigningStatus.Signed, CreatedBy: "Harbour Wealth Advisers", File: { FileName: "Whitfield_Trust_Deed.pdf", SizeBytes: 3_050_000 } },
  { ID: 5, Created: "2026-07-02", LastUpdated: "2026-07-02", Description: "Will — James Whitfield", DocumentType: 5, DocumentSigningStatus: DocumentSigningStatus.Pending, CreatedBy: "Harbour Wealth Advisers", File: { FileName: "Will_James_2026.pdf", SizeBytes: 156_000 } },
];

export function paged<T>(Results: T[], page = 1, pageSize = 50): PagedResults<T> {
  return {
    PageNumber: page,
    PageSize: pageSize,
    TotalNumberOfPages: Math.max(1, Math.ceil(Results.length / pageSize)),
    TotalNumberOfRecords: Results.length,
    Results: Results.slice((page - 1) * pageSize, page * pageSize),
  };
}
