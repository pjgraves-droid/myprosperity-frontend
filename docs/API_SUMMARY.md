# myprosperity API v1 — Endpoint Summary

Source: https://sandbox.api.myprosperity.com.au/swagger/docs/v1 (Swashbuckle / .NET Web API).
Production host: `api.myprosperity.com.au` (returns 403 without partner credentials). Sandbox: `sandbox.api.myprosperity.com.au`.

Auth: no `securityDefinitions` published. Existing integrations (AdviserLogic, FuseSign) use an OAuth consent flow; Swagger UI accepts an `api_key` query param. Partner onboarding via myprosperity is required for credentials.

Total endpoints: 348 across 323 models.

## Endpoints by tag

### Account (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/Account/Register` | Registers a new account. | model*:RegisterViewModel | object |

### Agents (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Agents` | Gets all partner agents in the current user's cobrand. | imagesSize | array<TaxPartnerAgent> |
| GET | `/api/Agents/{id}` | Gets a specific partner agents by ID. | id*, imageSize | TaxPartnerAgent |

### AsxListedCompanies (3)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/AsxListedCompanies/AsxListedCompanies` | Gets the list of ASX listed companies. | prefix, isListed, page, pageSize, orderBy, ascending | PagedResults[AsxListedCompany] |
| GET | `/api/AsxListedCompanies/AsxLatestSnapshotDate` | Gets the latest ASX listed company snapshot date. | isListed | date-time |
| GET | `/api/AsxListedCompanies/AsxListedCompany` | Gets a specific ASX listed company by code. | code* | AsxListedCompany |

### Cashflow (14)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Cashflow/CashflowTransactions` | Gets the list of cashflow transactions for the current user. | categories*, tags*, wealthItems, startDate, endDate, searchString, pendingReview, transactionType, page, pageSize, orderBy, ascending | PagedResults[CashflowTransactionSummary] |
| POST | `/api/Cashflow/CashflowTransactions` | Gets the list of cashflow transactions for the current user with the post request. | cashflowCategoryFilter*:CashflowCategoryFilter | PagedResults[CashflowTransactionSummary] |
| GET | `/api/Cashflow/CashflowCategoriesBudget` | Gets the list of cashflow categories with their associated budgets for the current user. | categories*, tags*, wealthItems, startDate, endDate, searchString | array<CashflowCategoryBudget> |
| POST | `/api/Cashflow/CashflowCategoriesBudget` | Gets the list of cashflow categories with their associated budgets for the current user with the post request. | cashflowCategoryBudgetFilter*:CashflowCategoryBudgetFilter | array<CashflowCategoryBudget> |
| GET | `/api/Cashflow/CashflowTransaction/{id}` | Gets the details of a specific cashflow transaction. | id*, transactionAccountType* | CashflowTransaction |
| POST | `/api/Cashflow/AddCashflowTransaction` | Creates a new cashflow transaction for the current user. | model*:CashflowTransaction | CashflowTransaction |
| POST | `/api/Cashflow/EditCashflowTransaction/{id}` | Updates an existing cashflow transaction for the current user. | id*, transactionAccountType*, model*:CashflowTransaction | object |
| POST | `/api/Cashflow/DeleteCashflowTransaction/{id}` | Deletes a manual cashflow transaction for the current user. | id*, transactionAccountType* | object |
| POST | `/api/Cashflow/AddCashflowTransactionRule` | Creates a new cashflow transaction rule for the current user. | model*:CashflowTransactionRule | CashflowTransactionRuleTask |
| GET | `/api/Cashflow/CashflowTransactionRuleTask/{id}` | Gets the status of a specific cashflow transaction rule task. | id* | CashflowTransactionRuleTask |
| POST | `/api/Cashflow/SetBudget` | Sets the budget for specific cashflow category. | model*:CashflowBudgetViewModel | object |
| GET | `/api/Cashflow/TransactionTags` | Gets all the transaction tags for the current user. |  | array<CashflowTransactionTag> |
| GET | `/api/Cashflow/TransactionCategories` | Gets all transaction categories for the current user. | transactionTypes* | array<TransactionCategory> |
| GET | `/api/Cashflow/FinancialAccountsWealthItems` | Gets all financial account wealth items for the current user. |  | array<WealthItemSummary> |

### Clients (8)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Clients/Entities/{id}` | Gets a specific entity client by id. | id* | CompanyClientDetails |
| PUT | `/api/Clients/Entities/{id}` | Updates an existing entity client for the current user. | id*, model*:CompanyClientDetails | object |
| POST | `/api/Clients/Entities` | Creates a new entity client for the current user. | model*:CompanyClientDetails | CompanyClientDetails |
| GET | `/api/Clients/People/{id}` | Gets a specific person client by id. | id* | PersonClientDetails |
| PUT | `/api/Clients/People/{id}` | Updates an existing person client for the current user. | id*, model*:PersonClientDetails | object |
| POST | `/api/Clients/People` | Creates a new person client for the current user. | model*:PersonClientDetails | PersonClientDetails |
| DELETE | `/api/Clients/{id}` | Deletes an existing client given by the id. | id* | object |
| GET | `/api/Clients` | Get clients which satisfies the given filter. | page*, pageSize*, ascending* | PagedResults[ClientDetailsLite] |

### Countries (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Countries` | Gets the list of countries. |  | array<Country> |

### DataDocuments (3)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/DataDocuments/AccountsForSyncing` | Gets the accounts whose documents should be synced for a specific integration type. | integrationType*, lastUpdatedThreshold | array<AccountsCredentialsGroupForIntegration[AccountForDocumentsIntegration]> |
| POST | `/api/DataDocuments/SaveDocumentsSynchronisationStatusForAccount` | Saves the document synchronisation status for a certain account. | integrationType*, model*:SaveDocumentsSynchronisationStatusForAccountViewModel | object |
| POST | `/api/DataDocuments/UploadDocumentForAccount` | Uploads a document file for a certain account. | integrationType*, accountGuid* | Document |

### DataIntegrationActions (12)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/DataIntegrationActions/PendingIntegrationActions` | Gets the pending integration actions of a specific type for a specific integration type. | integrationType*, integrationActionType* | array<IntegrationAction> |
| GET | `/api/DataIntegrationActions/PendingClientExportIntegrationActions` | Gets the pending integration actions of type client export for a specific integration type. | integrationType* | array<ClientExportIntegrationAction> |
| GET | `/api/DataIntegrationActions/PendingClientExportIntegrationAction/{id}` | Gets a specific pending integration action of type client export by ID. | id* | array<ClientExportIntegrationAction> |
| POST | `/api/DataIntegrationActions/AddPartnerAgentsForImport` | Adds partner agents to be imported for a specific integration action. | model*:AddPartnerAgentsForImportViewModel | object |
| POST | `/api/DataIntegrationActions/AddClientsForImport` | Adds clients to be imported for a specific integration action. | model*:AddClientsForImportViewModel | object |
| POST | `/api/DataIntegrationActions/AddEntitiesForImport` | Adds entities to be imported for a specific integration action. | model*:AddEntitiesForImportViewModel | object |
| POST | `/api/DataIntegrationActions/AddInvestmentFundsForImport` | Adds investment funds to be imported for a specific integration action. | model*:AddInvestmentFundsForImportViewModel | object |
| POST | `/api/DataIntegrationActions/PrepareReviewForImport` | Moves the status of a given import integration action to be ready for review. | integrationActionId* | object |
| POST | `/api/DataIntegrationActions/ReportClientImportIntegrationActionFailure` | Marks a client import integration action as failed if fetching data to be imported wasn't successful. | model*:ReportClientImportIntegrationActionFailureViewModel | object |
| POST | `/api/DataIntegrationActions/SaveIntegrationActionStatusForClientExport` | Saves the export status for a certain integration action of type client export. | model*:SaveIntegrationActionStatusForClientExportViewModel | object |
| POST | `/api/DataIntegrationActions/ReportClientExportIntegrationActionFailure` | Marks a client export integration action as failed if a critical error was encountered while trying to save the data to be third-party system. | model*:ReportClientExportIntegrationActionFailureViewModel | object |
| POST | `/api/DataIntegrationActions/SaveCredentials` | Updates the credentials for a certain cobrand and integration type. | credentialsCobrandGuid*, integrationType*, credentials*:object, credentialsAccountLoginGuid | object |

### DataIntegrationLogs (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/DataIntegrationLogs/AddLogs` | Logs status messages. | integrationLogs*:array<IntegrationLog> | object |
| POST | `/api/DataIntegrationLogs/AddLogsForItem` | Logs status messages where only the item reference in the model is known. | integrationLogForItems*:array<IntegrationLogForItem> | object |

### DataIntegrationStatuses (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/DataIntegrationStatuses/SaveStatuses` | Saves integration statuses. | integrationStatuses*:array<IntegrationStatus> | object |

### DataInvestmentFunds (7)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/DataInvestmentFunds/InvestmentBrandsForUpdating` | Gets the investment brands that should be updated for a specific provider. | investmentFundProvider*, lastUpdatedThreshold, validatePartnerAgentCredentials | array<InvestmentBrand> |
| POST | `/api/DataInvestmentFunds/UpdateInvestmentFundsListForBrand` | Updates the list of funds for a certain brand. | funds*:array<InvestmentFund>, brandId* | object |
| GET | `/api/DataInvestmentFunds/InvestmentFundsForUpdating` | Gets the investment funds that should be updated for a specific provider. | investmentFundProvider*, lastUpdatedThreshold, page, pageSize, orderBy, ascending | PagedResults[InvestmentFund] |
| GET | `/api/DataInvestmentFunds/InvestmentFundsForUpdatingWithValidCredentials` | Gets the investment funds that should be updated for a specific provider - checks to ensure the linked integration vault credentials are valid | investmentFundProvider*, lastUpdatedThreshold, page, pageSize, orderBy, ascending, validatePartnerAgentCredentials | PagedResults[InvestmentFund] |
| POST | `/api/DataInvestmentFunds/UpdateInvestmentAccounts` | Updates investment fund details. | accounts*:array<InvestmentAccount> | object |
| POST | `/api/DataInvestmentFunds/UpdateCredentialsForInvestmentBrand` | Updates the credentials for a certain investment brand. | brandId*, fundProvider*, newCredentials*:object | object |
| POST | `/api/DataInvestmentFunds/UpdateCredentialsForInvestmentFund` | Updates the credentials for a certain investment fund. | fundId*, fundProvider*, newCredentials*:object | object |

### Documents (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Documents` | Gets documents for the current user. | parentId, parentType, documentType, searchString, thirdPartyIntegrationType, page, pageSize, orderBy, ascending | PagedResults[Document] |
| POST | `/api/Documents` | Creates a new document for the current user. | thirdPartyIntegrationType, sendNotification | Document |
| GET | `/api/Documents/{id}` | Gets a specific document by ID. | id*, thirdPartyIntegrationType | Document |
| PUT | `/api/Documents/{id}` | Updates an existing document for the current user. | id*, model*:Document, thirdPartyIntegrationType | object |
| DELETE | `/api/Documents/{id}` | Deletes an existing document for the current user. | id* | object |

### EmploymentDetails (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/EmploymentDetails` | Get employment details paged results which satisfies the given filter. | page*, pageSize*, ascending* | PagedResults[List[EmploymentDetails]] |
| POST | `/api/EmploymentDetails` | Create new employment details. | employmentDetails*:EmploymentDetails | EmploymentDetails |
| GET | `/api/EmploymentDetails/{id}` | Gets employment details by id. | id* | EmploymentDetails |
| PUT | `/api/EmploymentDetails/{id}` | Update existing item by id. | id*, employmentDetails*:EmploymentDetails | object |
| DELETE | `/api/EmploymentDetails/{id}` | Delete employment details by id. | id* | object |

### EntitiesRelationships (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/EntitiesRelationships` | Gets the list of entities relationships. | isProfessional | array<EntityRelationship> |

### Expenses (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Expenses/{id}` | Get expense item by id. | id* | Expense |
| PUT | `/api/Expenses/{id}` | Update existing expense item by id. | id*, expense*:Expense | object |
| DELETE | `/api/Expenses/{id}` | Delete expense item by id. | id* | object |
| GET | `/api/Expenses` | Returns paged results of expenses. | page*, pageSize*, ascending* | PagedResults[List[Expense]] |
| POST | `/api/Expenses` | Create new expense item. | expense*:Expense | Expense |

### FinancialInstruments (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/FinancialInstruments/FinancialInstruments` | Gets the list of financial instruments for the specified exchange, instrument type, and instrument codes. | codes*, exchange, instrumentType, page, pageSize, orderBy, ascending | PagedResults[FinancialInstrument] |

### Goals (8)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Goals/GoalsList` | Gets goals for the current user. | displayStatuses*, goalType, goalItemImageSize, page, pageSize, orderBy, ascending | PagedResults[GoalSummary] |
| GET | `/api/Goals/GoalDetails/{id}` | Gets a specific goal by ID. | id*, goalItemImageSize | Goal |
| POST | `/api/Goals/AddGoal` | Creates a new goal for the current user. | model*:Goal | Goal |
| POST | `/api/Goals/EditGoal/{id}` | Updates an existing goal for the current user. | id*, model*:Goal | object |
| POST | `/api/Goals/DeleteGoal/{id}` | Deletes an existing goal for the current user. | id* | object |
| POST | `/api/Goals/CalculateSavings` | Calculates goal details and projections for Savings goals. | input*:SavingsGoalInput | SavingsGoalOutput |
| POST | `/api/Goals/CalculateDebtReduction` | Calculates goal details and projections for Debt Reduction goals. | input*:DebtReductionGoalInput | DebtReductionGoalOutput |
| GET | `/api/Goals/AccountsWealthItems` | Gets all accounts for user's goal. | goalType* | array<WealthItemSummary> |

### Images (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Images/ImageUrl` | Gets the complete URL for a certain image token. | imageToken*, size* | string |

### Incomes (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Incomes/{id}` | Get income item by id. | id* | Income |
| PUT | `/api/Incomes/{id}` | Update existing income item by id. | id*, income*:Income | object |
| DELETE | `/api/Incomes/{id}` | Delete income item by id. | id* | object |
| GET | `/api/Incomes` | Returns paged results of incomes. | page*, pageSize*, ascending* | PagedResults[List[Income]] |
| POST | `/api/Incomes` | Create new income item. | income*:Income | Income |

### InsuranceCovers (29)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/InsuranceCovers/Health` | Creates a new health insurance cover for the current user. | model*:InsuranceHealthCover | InsuranceHealthCover |
| PUT | `/api/InsuranceCovers/Health/{id}` | Updates an existing health insurance cover for the current user. | id*, model*:InsuranceHealthCover | object |
| POST | `/api/InsuranceCovers/General/Boat` | Creates a new boat insurance cover for the current user. | model*:InsuranceGeneralBoatCover | InsuranceGeneralBoatCover |
| POST | `/api/InsuranceCovers/General/Vehicle` | Creates a new vehicle insurance cover for the current user. | model*:InsuranceGeneralVehicleCover | InsuranceGeneralVehicleCover |
| POST | `/api/InsuranceCovers/General/Generic` | Creates a new generic insurance cover for the current user. | model*:InsuranceGeneralGenericCover | InsuranceGeneralGenericCover |
| PUT | `/api/InsuranceCovers/General/Boat/{id}` | Updates an existing boat insurance cover for the current user. | id*, model*:InsuranceGeneralBoatCover | object |
| PUT | `/api/InsuranceCovers/General/Vehicle/{id}` | Updates an existing vehicle insurance cover for the current user. | id*, model*:InsuranceGeneralVehicleCover | object |
| PUT | `/api/InsuranceCovers/General/Generic/{id}` | Updates an existing generic insurance cover for the current user. | id*, model*:InsuranceGeneralGenericCover | object |
| GET | `/api/InsuranceCovers/General/GenericCoverTypes` | Gets list of general cover generic types. |  | array<KeyValuePair[Int32,String]> |
| POST | `/api/InsuranceCovers/Personal/Life` | Creates a new life insurance cover for the current user. | model*:InsurancePersonalLifeCover | InsurancePersonalLifeCover |
| POST | `/api/InsuranceCovers/Personal/Tpd` | Creates a new TPD insurance cover for the current user. | model*:InsurancePersonalTpdCover | InsurancePersonalTpdCover |
| POST | `/api/InsuranceCovers/Personal/Trauma` | Creates a new trauma insurance cover for the current user. | model*:InsurancePersonalTraumaCover | InsurancePersonalTraumaCover |
| POST | `/api/InsuranceCovers/Personal/IncomeProtection` | Creates a new income protection insurance cover for the current user. | model*:InsurancePersonalIncomeProtectionCover | InsurancePersonalIncomeProtectionCover |
| POST | `/api/InsuranceCovers/Personal/BusinessExpense` | Creates a new business expense insurance cover for the current user. | model*:InsurancePersonalBusinessExpenseCover | InsurancePersonalBusinessExpenseCover |
| POST | `/api/InsuranceCovers/Personal/AdditionalRiderBenefit` | Creates a new additional rider benefit insurance cover for the current user. | model*:InsurancePersonalAdditionalRiderBenefitCover | InsurancePersonalAdditionalRiderBenefitCover |
| POST | `/api/InsuranceCovers/Personal/SeverityBased` | Creates a new severity based insurance cover for the current user. | model*:InsurancePersonalSeverityBasedCover | InsurancePersonalSeverityBasedCover |
| POST | `/api/InsuranceCovers/Personal/BloodBorneDisease` | Creates a new blood-borne disease insurance cover for the current user. | model*:InsurancePersonalBloodBorneDiseaseCover | InsurancePersonalBloodBorneDiseaseCover |
| PUT | `/api/InsuranceCovers/Personal/Life/{id}` | Updates an existing life insurance cover for the current user. | id*, model*:InsurancePersonalLifeCover | object |
| PUT | `/api/InsuranceCovers/Personal/Tpd/{id}` | Updates an existing TPD insurance cover for the current user. | id*, model*:InsurancePersonalTpdCover | object |
| PUT | `/api/InsuranceCovers/Personal/Trauma/{id}` | Updates an existing trauma insurance cover for the current user. | id*, model*:InsurancePersonalTraumaCover | object |
| PUT | `/api/InsuranceCovers/Personal/IncomeProtection/{id}` | Updates an existing income protection insurance cover for the current user. | id*, model*:InsurancePersonalIncomeProtectionCover | object |
| PUT | `/api/InsuranceCovers/Personal/BusinessExpense/{id}` | Updates an existing business expense insurance cover for the current user. | id*, model*:InsurancePersonalBusinessExpenseCover | object |
| PUT | `/api/InsuranceCovers/Personal/AdditionalRiderBenefit/{id}` | Updates an existing additional rider benefit insurance cover for the current user. | id*, model*:InsurancePersonalAdditionalRiderBenefitCover | object |
| PUT | `/api/InsuranceCovers/Personal/SeverityBased/{id}` | Updates an existing severity based insurance cover for the current user. | id*, model*:InsurancePersonalSeverityBasedCover | object |
| PUT | `/api/InsuranceCovers/Personal/BloodBorneDisease/{id}` | Updates an existing blood-borne disease insurance cover for the current user. | id*, model*:InsurancePersonalBloodBorneDiseaseCover | object |
| GET | `/api/InsuranceCovers/CoverSubTypes/{insuranceCoverType}` | Gets list of cover sub types. | insuranceCoverType* | array<KeyValuePair[Int32,String]> |
| GET | `/api/InsuranceCovers/{id}` | Gets a specific insurance cover by ID. | id* | InsuranceCover |
| DELETE | `/api/InsuranceCovers/{id}` | Deletes an existing insurance cover for the current user. | id* | object |
| GET | `/api/InsuranceCovers` | Gets insurance covers for the current user. | page*, pageSize*, ascending*, parentId* | PagedResults[InsuranceCover] |

### InsurancePolicies (6)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/InsurancePolicies/PolicyTypes` | Gets list of policy types. |  | array<KeyValuePair[Int32,String]> |
| GET | `/api/InsurancePolicies` | Get insurance items which satisfies the given filter. | page*, pageSize*, ascending* | PagedResults[InsurancePolicy] |
| POST | `/api/InsurancePolicies` | Creates a new insurance policy for the current user. | model*:InsurancePolicy | InsurancePolicy |
| GET | `/api/InsurancePolicies/{id}` | Gets a specific insurance policy by Id. | id* | InsurancePolicy |
| PUT | `/api/InsurancePolicies/{id}` | Updates an existing insurance policy for the current user. | id*, model*:InsurancePolicy | object |
| DELETE | `/api/InsurancePolicies/{id}` | Deletes an existing insurance policy given by the id. | id* | object |

### InvestmentHoldings (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/InvestmentHoldings` | Get investment holdings for a given wealth item. | wealthItemId*, page, pageSize, orderBy, ascending | PagedResults[InvestmentHolding] |

### LifeGoals (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/LifeGoals/{id}` | Get Life Goal item by id. | id* | PagedResults[LifeGoal] |
| PUT | `/api/LifeGoals/{id}` | Update life goal item. | id*, model*:LifeGoal | object |
| DELETE | `/api/LifeGoals/{id}` | Delete life goal entry by id. | id* | boolean |
| GET | `/api/LifeGoals` | Get life goal items which satisfies the given filter. | page*, pageSize*, ascending* | PagedResults[List[LifeGoal]] |
| POST | `/api/LifeGoals` | Create a new life goal, with EntityID comes from the Body. | model*:LifeGoal | LifeGoal |

### NetWorth (115)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/networth/asset/property/home` | Get home paged results by provided filter | page, pageSize, isAscending | PagedResults[PropertyModel] |
| POST | `/api/networth/asset/property/home` | Create home net worth item | model*:PropertyModel | object |
| GET | `/api/networth/asset/property/investment` | Get investment paged results by provided filter | page, pageSize, isAscending | PagedResults[PropertyModel] |
| POST | `/api/networth/asset/property/investment` | Create investment net worth item | model*:PropertyModel | object |
| GET | `/api/networth/asset/property/lifestyle` | Get lifestyle paged results by provided filter | page, pageSize, isAscending | PagedResults[PropertyModel] |
| POST | `/api/networth/asset/property/lifestyle` | Create lifestyle net worth item | model*:PropertyModel | object |
| GET | `/api/networth/asset/bankaccount` | Get bank account paged results by provided filter | page, pageSize, isAscending | PagedResults[BankAccountAndDepositModel] |
| POST | `/api/networth/asset/bankaccount` | Create bank account net worth item | model*:BankAccountAndDepositModel | BankAccountAndDepositModel |
| GET | `/api/networth/asset/termdeposit` | Get term deposit paged results by provided filter | page, pageSize, isAscending | PagedResults[BankAccountAndDepositModel] |
| POST | `/api/networth/asset/termdeposit` | Create term deposit net worth item | model*:BankAccountAndDepositModel | BankAccountAndDepositModel |
| GET | `/api/networth/asset/super` | Get super paged results by provided filter | page, pageSize, isAscending | PagedResults[InvestmentSuperAndDbsModel] |
| POST | `/api/networth/asset/super` | Create super net worth item | model*:InvestmentSuperAndDbsModel | InvestmentSuperAndDbsModel |
| GET | `/api/networth/asset/dbs` | Get defined benefit schema paged results by provided filter | page, pageSize, isAscending | PagedResults[InvestmentSuperAndDbsModel] |
| POST | `/api/networth/asset/dbs` | Create defined benefit schema net worth item | model*:InvestmentSuperAndDbsModel | InvestmentSuperAndDbsModel |
| GET | `/api/networth/asset/portfolio` | Get portfolio paged results by provided filter | page, pageSize, isAscending | PagedResults[InvestmentPortfolioModel] |
| POST | `/api/networth/asset/portfolio` | Create portfolio net worth item | model*:InvestmentPortfolioModel | InvestmentPortfolioModel |
| GET | `/api/networth/asset/business` | Get business paged results by provided filter | page, pageSize, isAscending | PagedResults[BusinessModel] |
| POST | `/api/networth/asset/business` | Create business net worth item | model*:BusinessModel | BusinessModel |
| GET | `/api/networth/asset/shares` | Get shares paged results by provided filter | page, pageSize, isAscending | PagedResults[SharesModel] |
| POST | `/api/networth/asset/shares` | Create shares net worth item | model*:SharesModel | SharesModel |
| GET | `/api/networth/asset/vehicle` | Get vehicle paged results by provided filter | page, pageSize, isAscending | PagedResults[VehicleModel] |
| POST | `/api/networth/asset/vehicle` | Create vehicle net worth item | model*:VehicleModel | VehicleModel |
| GET | `/api/networth/asset/collectible` | Get collectible paged results by provided filter | page, pageSize, isAscending | PagedResults[NetWorthAssetModel] |
| POST | `/api/networth/asset/collectible` | Create collectible net worth item | model*:NetWorthAssetModel | NetWorthAssetModel |
| GET | `/api/networth/asset/content` | Get content paged results by provided filter | page, pageSize, isAscending | PagedResults[NetWorthAssetModel] |
| POST | `/api/networth/asset/content` | Create content net worth item | model*:NetWorthAssetModel | NetWorthAssetModel |
| GET | `/api/networth/asset/other` | Get other paged results by provided filter | page, pageSize, isAscending | PagedResults[NetWorthAssetModel] |
| POST | `/api/networth/asset/other` | Create other net worth item | model*:NetWorthAssetModel | NetWorthAssetModel |
| GET | `/api/networth/asset/equity` | Get equity paged results by provided filter | page, pageSize, isAscending | PagedResults[NetWorthAssetModel] |
| POST | `/api/networth/asset/equity` | Create equity net worth item | model*:NetWorthAssetModel | NetWorthAssetModel |
| GET | `/api/networth/liability/creditcard` | Get credit card paged results by provided filter | page, pageSize, isAscending | PagedResults[CreditCardModel] |
| POST | `/api/networth/liability/creditcard` | Create credit card net worth item | model*:CreditCardModel | CreditCardModel |
| GET | `/api/networth/liability/loan/homemortgage` | Get home mortgage paged results by provided filter | page, pageSize, isAscending | PagedResults[LoanModel] |
| POST | `/api/networth/liability/loan/homemortgage` | Create home mortgage net worth item | model*:LoanModel | LoanModel |
| GET | `/api/networth/liability/loan/car` | Get car paged results by provided filter | page, pageSize, isAscending | PagedResults[LoanModel] |
| POST | `/api/networth/liability/loan/car` | Create car net worth item | model*:LoanModel | LoanModel |
| GET | `/api/networth/liability/loan/investment` | Get investment paged results by provided filter | page, pageSize, isAscending | PagedResults[LoanModel] |
| POST | `/api/networth/liability/loan/investment` | Create investment net worth item | model*:LoanModel | LoanModel |
| GET | `/api/networth/liability/loan/personal` | Get personal paged results by provided filter | page, pageSize, isAscending | PagedResults[LoanModel] |
| POST | `/api/networth/liability/loan/personal` | Create personal net worth item | model*:LoanModel | LoanModel |
| GET | `/api/networth/liability/loan/other` | Get other paged results by provided filter | page, pageSize, isAscending | PagedResults[LoanModel] |
| POST | `/api/networth/liability/loan/other` | Create other net worth item | model*:LoanModel | LoanModel |
| GET | `/api/networth/liability/carlease` | Get carlease paged results by provided filter | page, pageSize, isAscending | PagedResults[CarLeaseModel] |
| POST | `/api/networth/liability/carlease` | Create carlease net worth item | model*:CarLeaseModel | CarLeaseModel |
| GET | `/api/networth/liability/other` | Get other paged results by provided filter | page, pageSize, isAscending | PagedResults[NetWorthLiabilityModel] |
| POST | `/api/networth/liability/other` | Create other net worth item | model*:NetWorthLiabilityModel | NetWorthLiabilityModel |
| GET | `/api/networth/asset/property/home/{id}` | Get home net worth item by id | id* | PropertyModel |
| PUT | `/api/networth/asset/property/home/{id}` | Update existing home networth item by id | id*, model*:PropertyModel | object |
| DELETE | `/api/networth/asset/property/home/{id}` | Delete home net worth item by id | id* | object |
| GET | `/api/networth/asset/property/investment/{id}` | Get investment net worth item by id | id* | PropertyModel |
| PUT | `/api/networth/asset/property/investment/{id}` | Update existing investment networth item by id | id*, model*:PropertyModel | object |
| DELETE | `/api/networth/asset/property/investment/{id}` | Delete investment net worth item by id | id* | object |
| GET | `/api/networth/asset/property/lifestyle/{id}` | Get lifestyle net worth item by id | id* | PropertyModel |
| PUT | `/api/networth/asset/property/lifestyle/{id}` | Update existing lifestyle networth item by id | id*, model*:PropertyModel | object |
| DELETE | `/api/networth/asset/property/lifestyle/{id}` | Delete lifestyle net worth item by id | id* | object |
| GET | `/api/networth/asset/bankaccount/{id}` | Get bank account net worth item by id | id* | BankAccountAndDepositModel |
| PUT | `/api/networth/asset/bankaccount/{id}` | Update existing bank account networth item by id | id*, model*:BankAccountAndDepositModel | object |
| DELETE | `/api/networth/asset/bankaccount/{id}` | Delete bank account net worth item by id | id* | object |
| GET | `/api/networth/asset/termdeposit/{id}` | Get term deposit net worth item by id | id* | BankAccountAndDepositModel |
| PUT | `/api/networth/asset/termdeposit/{id}` | Update existing term deposit networth item by id | id*, model*:BankAccountAndDepositModel | object |
| DELETE | `/api/networth/asset/termdeposit/{id}` | Delete term deposit net worth item by id | id* | object |
| GET | `/api/networth/asset/super/{id}` | Get super net worth item by id | id* | InvestmentSuperAndDbsModel |
| PUT | `/api/networth/asset/super/{id}` | Update existing super networth item by id | id*, model*:InvestmentSuperAndDbsModel | object |
| DELETE | `/api/networth/asset/super/{id}` | Delete super net worth item by id | id* | object |
| GET | `/api/networth/asset/dbs/{id}` | Get defined benefit schema net worth item by id | id* | InvestmentSuperAndDbsModel |
| PUT | `/api/networth/asset/dbs/{id}` | Update existing defined benefit schema networth item by id | id*, model*:InvestmentSuperAndDbsModel | object |
| DELETE | `/api/networth/asset/dbs/{id}` | Delete defined benefit schema net worth item by id | id* | object |
| GET | `/api/networth/asset/portfolio/{id}` | Get portfolio net worth item by id | id* | NetWorthAssetModel |
| PUT | `/api/networth/asset/portfolio/{id}` | Update existing portfolio networth item by id | id*, model*:InvestmentPortfolioModel | object |
| DELETE | `/api/networth/asset/portfolio/{id}` | Delete portfolio net worth item by id | id* | InvestmentSuperAndDbsModel |
| GET | `/api/networth/asset/business/{id}` | Get business net worth item by id | id* | BusinessModel |
| PUT | `/api/networth/asset/business/{id}` | Update existing business networth item by id | id*, model*:BusinessModel | BusinessModel |
| DELETE | `/api/networth/asset/business/{id}` | Delete business net worth item by id | id* | BusinessModel |
| GET | `/api/networth/asset/shares/{id}` | Get shares net worth item by id | id* | SharesModel |
| PUT | `/api/networth/asset/shares/{id}` | Update existing shares networth item by id | id*, model*:SharesModel | object |
| DELETE | `/api/networth/asset/shares/{id}` | Delete shares net worth item by id | id* | SharesModel |
| GET | `/api/networth/asset/vehicle/{id}` | Get vehicle net worth item by id | id* | VehicleModel |
| PUT | `/api/networth/asset/vehicle/{id}` | Update existing vehicle networth item by id | id*, model*:VehicleModel | object |
| DELETE | `/api/networth/asset/vehicle/{id}` | Delete vehicle net worth item by id | id* | VehicleModel |
| GET | `/api/networth/asset/other/{id}` | Get other net worth item by id | id* | NetWorthAssetModel |
| PUT | `/api/networth/asset/other/{id}` | Update existing other networth item by id | id*, model*:NetWorthAssetModel | NetWorthAssetModel |
| DELETE | `/api/networth/asset/other/{id}` | Delete other net worth item by id | id* | BusinessModel |
| GET | `/api/networth/asset/collectible/{id}` | Get collectible net worth item by id | id* | NetWorthAssetModel |
| PUT | `/api/networth/asset/collectible/{id}` | Update existing collectible networth item by id | id*, model*:NetWorthAssetModel | NetWorthAssetModel |
| DELETE | `/api/networth/asset/collectible/{id}` | Delete collectible net worth item by id | id* | BusinessModel |
| GET | `/api/networth/asset/content/{id}` | Get content net worth item by id | id* | NetWorthAssetModel |
| PUT | `/api/networth/asset/content/{id}` | Update existing content networth item by id | id*, model*:NetWorthAssetModel | NetWorthAssetModel |
| DELETE | `/api/networth/asset/content/{id}` | Delete content net worth item by id | id* | BusinessModel |
| GET | `/api/networth/asset/equity/{id}` | Get equity net worth item by id | id* | NetWorthAssetModel |
| PUT | `/api/networth/asset/equity/{id}` | Update existing equity networth item by id | id*, model*:NetWorthAssetModel | NetWorthAssetModel |
| DELETE | `/api/networth/asset/equity/{id}` | Delete equity net worth item by id | id* | InvestmentSuperAndDbsModel |
| GET | `/api/networth/liability/creditcard/{id}` | Get credit card net worth item by id | id* | CreditCardModel |
| PUT | `/api/networth/liability/creditcard/{id}` | Update existing credit card networth item by id | id*, model*:CreditCardModel | object |
| DELETE | `/api/networth/liability/creditcard/{id}` | Delete credit card net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/carlease/{id}` | Get carlease net worth item by id | id* | CreditCardModel |
| PUT | `/api/networth/liability/carlease/{id}` | Update existing carlease networth item by id | id*, model*:CarLeaseModel | object |
| DELETE | `/api/networth/liability/carlease/{id}` | Delete carlease net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/loan/homemortgage/{id}` | Get home mortgage net worth item by id | id* | LoanModel |
| PUT | `/api/networth/liability/loan/homemortgage/{id}` | Update existing home mortgage networth item by id | id*, model*:LoanModel | object |
| DELETE | `/api/networth/liability/loan/homemortgage/{id}` | Delete home mortgage net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/loan/car/{id}` | Get car net worth item by id | id* | LoanModel |
| PUT | `/api/networth/liability/loan/car/{id}` | Update existing car networth item by id | id*, model*:LoanModel | object |
| DELETE | `/api/networth/liability/loan/car/{id}` | Delete car net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/loan/investment/{id}` | Get investment net worth item by id | id* | LoanModel |
| PUT | `/api/networth/liability/loan/investment/{id}` | Update existing investment networth item by id | id*, model*:LoanModel | object |
| DELETE | `/api/networth/liability/loan/investment/{id}` | Delete investment net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/loan/personal/{id}` | Get personal net worth item by id | id* | LoanModel |
| PUT | `/api/networth/liability/loan/personal/{id}` | Update existing personal networth item by id | id*, model*:LoanModel | object |
| DELETE | `/api/networth/liability/loan/personal/{id}` | Delete personal net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/loan/other/{id}` | Get other net worth item by id | id* | LoanModel |
| PUT | `/api/networth/liability/loan/other/{id}` | Update existing other networth item by id | id*, model*:LoanModel | object |
| DELETE | `/api/networth/liability/loan/other/{id}` | Delete other net worth item by id | id* | CreditCardModel |
| GET | `/api/networth/liability/other/{id}` | Get other net worth item by id | id* | NetWorthLiabilityModel |
| PUT | `/api/networth/liability/other/{id}` | Update existing other networth item by id | id*, model*:NetWorthLiabilityModel | NetWorthLiabilityModel |
| DELETE | `/api/networth/liability/other/{id}` | Delete other net worth item by id | id* | BusinessModel |

### NotificationCentral (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/NotificationCentral/NotificationsList` | Gets notifications for the current user. | page, pageSize, orderBy, ascending | PagedResults[ClientNotificationItem] |

### PartnerClients (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/PartnerClients/Clients` | Gets the list of clients for the current partner user. | thirdPartyIntegrationType, page, pageSize, orderBy, ascending | PagedResults[PartnerClient] |
| POST | `/api/PartnerClients/AddClient` | Creates a new client account for the current partner user. | model*:PartnerAddClientModel | PartnerAddClientResponse |
| POST | `/api/PartnerClients/UpgradeClientPlan` | Upgrades a client account's plan in current partner user's team. | model*:PartnerUpgradeClientPlanModel | object |
| POST | `/api/PartnerClients/SendActivationNotificationToClient` | Sends an activation email notification to a client in current partner user's team. | ClientAccountGuid* | object |
| POST | `/api/PartnerClients/SaveClientsThirdPartyIntegrationId` | Saves the third-party external ID for a list of clients in current partner user's team. | model*:PartnerSaveClientsThirdPartyIntegrationIdViewModel, thirdPartyIntegrationType* | object |

### PartnerNotifications (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/PartnerNotifications/SendNotificationToClient` | Sends a notification to a client for the current partner user. | model*:PartnerSendNotificationToClientViewModel | object |

### PersonalHealthDetails (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/PersonalHealthDetails/{id}` | Get health details by id. | id* | PersonalHealthDetail |
| PUT | `/api/PersonalHealthDetails/{id}` | Updates personal health details by id. | id*, model*:PersonalHealthDetail | object |
| DELETE | `/api/PersonalHealthDetails/{id}` | Deletes personal health detail by id | id* | object |
| GET | `/api/PersonalHealthDetails` | Returns paged result for list of personal health details. | page*, pageSize*, ascending* | array<PersonalHealthDetail> |
| POST | `/api/PersonalHealthDetails` | Create personal health details. | model*:PersonalHealthDetail | PersonalHealthDetail |

### PersonalInfo (13)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/PersonalInfo/MyAccount` | Gets the current user's account information. |  | Account |
| GET | `/api/PersonalInfo/MyAccountLogin` | Gets the current user's account login information. | imageSize, appId, appPlatformType | AccountLoginWithRoomMemberProfile |
| GET | `/api/PersonalInfo/MyEntity` | Gets the current user's entity. |  | Entity |
| GET | `/api/PersonalInfo/MyDashboard` | Gets dashboard information for the current user. | avatarImageSize, wealthItemsImagesSize | DashboardInfo |
| GET | `/api/PersonalInfo/MyFirmInfo` | Gets the firm's information for the current user. |  | TaxPartnerBranch |
| GET | `/api/PersonalInfo/MyFirmTools` | Gets app tools and calculators for the current user's firm. | type | array<FirmAppTool> |
| GET | `/api/PersonalInfo/MyTeam` | Gets the current user's team members. | includeNonGuestAccess, includeCompanyEntities, includeNotInTeam | array<EntitySummary> |
| GET | `/api/PersonalInfo/MyUploadsFolder` | Gets the default uploads folder for the current user. |  | DocumentParent |
| GET | `/api/PersonalInfo/GetFolder` | Gets the folder with the given name for the current user. | folderName* | DocumentParent |
| GET | `/api/PersonalInfo/MyReceiptsFolder` | Gets the default receipts folder for the current user. |  | DocumentParent |
| POST | `/api/PersonalInfo/UpdatePreferenceTarget` | Updates the account's preference target. | preferenceTarget*:int32 | object |
| POST | `/api/PersonalInfo/MarkFirstTimeWizardAsCompleted` | Updates the current account to mark that the first-time wizard was completed. |  | object |
| GET | `/api/PersonalInfo/GetHouseholdOwners` | Get household owner's basic information |  | array<HouseholdOwnerDTO> |

### PowerOfAttorneys (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/PowerOfAttorneys/{id}` | Get power of attorney by id. | id* | PowerOfAttorney |
| PUT | `/api/PowerOfAttorneys/{id}` | Update power of attorney's details by id. | id*, model*:PowerOfAttorney | object |
| DELETE | `/api/PowerOfAttorneys/{id}` | Delete power of attorney by id. | id* | object |
| GET | `/api/PowerOfAttorneys` | Get paged results of power of attorneys. | page*, pageSize*, ascending* | PagedResults[PowerOfAttorney] |
| POST | `/api/PowerOfAttorneys` | Create power of attorney. | model*:PowerOfAttorney | PowerOfAttorney |

### RetirementIncomes (7)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/RetirementIncomes/Annuity` | Create new retirement annuity income item. | model*:AnnuityRetirementIncome | AnnuityRetirementIncome |
| POST | `/api/RetirementIncomes/Pension` | Create new retirement pension income item. | model*:PensionRetirementIncome | PensionRetirementIncome |
| PUT | `/api/RetirementIncomes/Annuity/{id}` | Update existing retirement annuity income item. | id*, model*:AnnuityRetirementIncome | object |
| PUT | `/api/RetirementIncomes/Pension/{id}` | Update existing retirement pension income item. | id*, model*:PensionRetirementIncome | object |
| GET | `/api/RetirementIncomes/{id}` | Get retirement income item by id. | id* | RetirementIncome |
| DELETE | `/api/RetirementIncomes/{id}` | Delete retirement income item by id. | id* | object |
| GET | `/api/RetirementIncomes` | Get paged result for retirement income ordered list. | page*, pageSize*, ascending* | RetirementIncome |

### RoomChat (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| POST | `/api/RoomChat/GenerateChatAccessToken` | Generates a new access token to be used with chat for the current user. | appId, appPlatformType | string |
| GET | `/api/RoomChat/ChatMessagesList` | Gets chat messages for a given room. | roomId* | array<RoomChatMessage> |

### RoomCobrandInvitations (6)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomCobrandInvitations/CobrandInvitationsList` | Gets pending cobrand invitations for a given room. | roomId*, includeNonPendingInvitations | array<RoomCobrandInvitation> |
| GET | `/api/RoomCobrandInvitations/CobrandInvitationDetails/{id}` | Gets a specific cobrand invitation by ID. | roomId*, id* | RoomCobrandInvitation |
| POST | `/api/RoomCobrandInvitations/AcceptRoomCobrandInvitationByRoomOwner` | Accepts a pending cobrand invitation for a given room. | roomId*, model*:AcceptRoomCobrandInvitationViewModel | object |
| POST | `/api/RoomCobrandInvitations/RejectRoomCobrandInvitationByRoomOwner` | Rejects a pending cobrand invitation for a given room. | roomId*, model*:RejectRoomCobrandInvitationViewModel | object |
| POST | `/api/RoomCobrandInvitations/AddRoomCobrandInvitationFromDirectory` | Adds an invitation to a cobrand from the directory to join a room. | roomId*, model*:AddRoomCobrandInvitationViewModel | RoomCobrandInvitation |
| POST | `/api/RoomCobrandInvitations/AddRoomCobrandInvitationFromMarketPlace` | Adds an invitation to a cobrand from the market place to join a room. | roomId*, model*:AddRoomCobrandInvitationViewModel | RoomCobrandInvitation |

### RoomDirectory (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomDirectory/DirectoryCobrandsList` | Gets directory cobrands for a given room. | roomId* | array<DirectoryCobrand> |
| GET | `/api/RoomDirectory/MarketplaceCobrandsList` | Gets marketplace cobrands for a given room. | roomId*, page, pageSize, orderBy, ascending | PagedResults[MarketplaceCobrand] |

### RoomDocuments (8)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomDocuments/DocumentsList` | Gets documents for a given room. | roomId*, hasDocumentSigningOnly, thirdPartyIntegrationType, page, pageSize, orderBy, ascending | PagedResults[Document] |
| GET | `/api/RoomDocuments/DocumentDetails/{id}` | Gets a specific document by ID. | roomId*, id*, thirdPartyIntegrationType | Document |
| GET | `/api/RoomDocuments/DocumentDetailsByRoomDocumentId` | Gets a specific document by the room document ID. | roomId*, roomDocumentId*, thirdPartyIntegrationType | Document |
| POST | `/api/RoomDocuments/AddDocument` | Creates a new document for a given room. | roomId*, thirdPartyIntegrationType | Document |
| POST | `/api/RoomDocuments/AddExistingDocument/{id}` | Adds an existing document to a given room. | roomId*, id* | Document |
| POST | `/api/RoomDocuments/EditDocument/{id}` | Updates an existing document for a given room. | roomId*, id*, model*:Document, thirdPartyIntegrationType | object |
| POST | `/api/RoomDocuments/RemoveDocument/{id}` | Removes an existing document from a given room. | roomId*, id* | object |
| GET | `/api/RoomDocuments/DefaultUploadsFolder` | Gets the default uploads folder for a given room. | roomId* | DocumentParent |

### RoomMembers (6)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomMembers/MembersList` | Gets members for a given room. | roomId*, memberImagesSize | array<RoomMember> |
| GET | `/api/RoomMembers/MemberDetails/{id}` | Gets a specific room member by ID. | roomId*, id*, memberImageSize | RoomMember |
| GET | `/api/RoomMembers/RoomOwnerTeamMembersListToInviteFrom` | Gets team members of a given room's owner that are eligible to be invited to the given room. | roomId*, imagesSize | array<EntitySummary> |
| GET | `/api/RoomMembers/AgentsListToInviteFrom` | Gets agents that are eligible to be invited to a given room. | roomId*, imagesSize | array<TaxPartnerAgentToInviteToRoom> |
| POST | `/api/RoomMembers/AddMember` | Adds a new member to a given room. | roomId*, model*:AddMemberViewModel | RoomMember |
| POST | `/api/RoomMembers/RemoveMember/{id}` | Removes an existing member from a given room. | roomId*, id* | object |

### RoomMoafInstances (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomMoafInstances/MoafInstancesList` | Gets MOAF instances for a given room. | roomId*, formFillStatuses*, page, pageSize, orderBy, ascending | PagedResults[RoomMoafInstanceSummary] |
| GET | `/api/RoomMoafInstances/MoafInstanceByRoomMoafInstanceId` | Gets a MOAF instance by the room MOAF instance ID. | roomId*, roomMoafInstanceId* | RoomMoafInstanceSummary |

### RoomPermissionRequests (6)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomPermissionRequests/PermissionRequestsList` | Gets permission requests for a given room. | roomId* | array<RoomPermissionRequest> |
| GET | `/api/RoomPermissionRequests/PermissionRequestDetails/{id}` | Gets a specific permission request by ID. | roomId*, id* | RoomPermissionRequest |
| POST | `/api/RoomPermissionRequests/RequestPermission` | Request permissions from a given room. | roomId*, model*:RequestPermissionViewModel | RoomPermissionRequest |
| POST | `/api/RoomPermissionRequests/HasPermission` | Checks whether or not the current user has certain permissions in a given room owner's account. | roomId*, model*:HasPermissionViewModel | boolean |
| POST | `/api/RoomPermissionRequests/AcceptPermissionRequest` | Accepts a pending permission request in a given room. | roomId*, model*:AcceptPermissionRequestViewModel | object |
| POST | `/api/RoomPermissionRequests/RejectPermissionRequest` | Rejects a pending permission request in a given room. | roomId*, model*:RejectPermissionRequestViewModel | object |

### RoomRoomInvitations (4)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomRoomInvitations/RoomInvitationsList` | Gets room invitations for the current login user. | invitationStatuses*, roomStatuses*, roomType, page, pageSize, orderBy, ascending | PagedResults[RoomInvitation] |
| GET | `/api/RoomRoomInvitations/RoomInvitationDetails` | Gets a specific room invitation by ID. | roomInvitationId* | RoomInvitation |
| POST | `/api/RoomRoomInvitations/AcceptRoomInvitation` | Accepts a pending room invitation, effectively creating a room that would be attached to the given invitation. | model*:AcceptRoomInvitationViewModel | RoomInvitation |
| POST | `/api/RoomRoomInvitations/RejectRoomInvitation` | Rejects a pending room invitation. | model*:RejectRoomInvitationViewModel | RoomInvitation |

### RoomRooms (7)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomRooms/RoomsList` | Gets rooms for the current user. | roomStatuses*, roomType, memberRoles, page, pageSize, orderBy, ascending | PagedResults[RoomSummary] |
| GET | `/api/RoomRooms/RoomDetails` | Gets a specific room by ID. | roomId* | Room |
| GET | `/api/RoomRooms/RoomDetailsByChatChannelIdentifier` | Gets a specific room by its chat channel identifier. | chatChannelIdentifier* | Room |
| POST | `/api/RoomRooms/AddRoomFromService` | Creates a new room for the current user from a given service. | model*:AddRoomFromServiceViewModel | Room |
| POST | `/api/RoomRooms/RenameRoom` | Renames and changes description to an existing room for the current user. | roomId*, model*:RenameRoomViewModel | Room |
| POST | `/api/RoomRooms/CloseRoom` | Closes a specific room for the current user. | roomId*, model*:CloseRoomViewModel | Room |
| GET | `/api/RoomRooms/RoomTypesList` | Gets the list of room types. |  | array<RoomTypeSummary> |

### RoomTasks (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomTasks/TasksList` | Gets tasks for a given room. | roomId* | array<RoomTask> |

### RoomTodos (7)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/RoomTodos/TodosList` | Gets to-do tasks for a given room. | roomId*, displayStatuses*, page, pageSize, orderBy, ascending | PagedResults[TodoSummary] |
| GET | `/api/RoomTodos/TodoDetails/{id}` | Gets a specific to-do task by ID. | roomId*, id* | Todo |
| GET | `/api/RoomTodos/TodoDetailsByRoomTodoId` | Gets a specific to-do task by the room to-do ID. | roomId*, roomTodoId* | Todo |
| POST | `/api/RoomTodos/AddTodo` | Creates a new to-do task for a given room. | roomId*, model*:Todo | Todo |
| POST | `/api/RoomTodos/AddExistingTodo/{id}` | Adds an existing to-do task to a given room. | roomId*, id* | Todo |
| POST | `/api/RoomTodos/EditTodo/{id}` | Updates an existing to-do task for a given room. | roomId*, id*, model*:Todo | object |
| POST | `/api/RoomTodos/RemoveTodo/{id}` | Removes an existing to-do task from a given room. | roomId*, id* | object |

### Services (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Services/OfferedServices` | Gets the services that are offered by the current user's firm. |  | array<ServiceSummary> |

### Snapshots (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Snapshots/MonthlySnapshots` | Gets a list of monthly snapshots for the current user. | startDate, endDate | array<Snapshot> |

### States (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/States` | Gets the list of states. | countryId* | array<State> |

### TodoPresets (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/TodoPresets` | Gets the list of  to-do presets. | group | array<TodoPreset> |

### Todos (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Todos` | Gets to-do tasks for the current user. | owners*, displayStatuses*, parentId, parentType, page, pageSize, orderBy, ascending | PagedResults[TodoSummary] |
| POST | `/api/Todos` | Creates a new to-do task for the current user. | model*:Todo | Todo |
| GET | `/api/Todos/{id}` | Gets a specific to-do task by ID. | id* | Todo |
| PUT | `/api/Todos/{id}` | Updates an existing to-do task for the current user. | id*, model*:Todo | object |
| DELETE | `/api/Todos/{id}` | Deletes an existing to-do task for the current user. | id* | object |

### WealthItems (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/WealthItems` | Gets the list of wealth items for the current users. | wealthItemsImagesSize | array<WealthItemSummary> |
| GET | `/api/WealthItems/{id}` | Gets a specific wealth item by ID. | id*, wealthItemImageSize | WealthItem |

### WealthItemsCategories (1)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/WealthItemsCategories` | Gets the list of wealth items categories. | isAssetWealthItemCategory | array<WealthItemCategory> |

### WealthItemsHistory (2)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/WealthItemsHistory/MonthlyWealthItemsHistory` | Gets a list of monthly history points for wealth items. | wealthItemId, startDate, endDate | array<WealthItemHistory> |
| POST | `/api/WealthItemsHistory/UpdateMonthlyWealthItemsHistory` | Adds or updates a list of monthly history points for wealth items. | wealthItemHistories*:array<WealthItemHistory> | object |

### Wills (5)

| Method | Path | Summary | Params | Returns |
|---|---|---|---|---|
| GET | `/api/Wills` | Gets wills for the current user. | owners* | PagedResults[WillSummary] |
| POST | `/api/Wills` | Creates a new will for the current user. | model*:Will | Will |
| GET | `/api/Wills/{id}` | Gets a specific will by ID. | id* | Will |
| PUT | `/api/Wills/{id}` | Updates an existing will for the current user. | id*, model*:Will | object |
| DELETE | `/api/Wills/{id}` | Deletes an existing will for the current user. | id* | object |

## Models

- **AcceptPermissionRequestViewModel**: PermissionRequestID:int32, OneTimeOnly:boolean
- **AcceptRoomCobrandInvitationViewModel**: RoomCobrandInvitationID:int32
- **AcceptRoomInvitationViewModel**: RoomInvitationID:int32
- **Account**: Guid:string, DisplayName:string, AccountLogins:array<AccountLogin>, GroupName:string, CobrandToUse:Cobrand, AccountSettings:AccountSetting, IsActive:boolean, WealthReview:date-time, CashflowReview:date-time, FirstTimeWizardCompletedDate:date-time, DeactivatedDate:date-time, HasSetBudget:boolean, Plan:Plan, PlanExpiryDate:date-time, FallbackPlan:Plan, ActivePlan:Plan, IsSurveyRequired:boolean, PreferenceTarget:int32, IsUpdatePreferenceTargetRequired:boolean, EntityType:int32
- **AccountForDocumentsIntegration**: DefaultUploadDocumentParent:DocumentParent, Documents:array<DocumentForIntegration>, AccountGuid:string, ExternalIds:array<string>, IntegrationType:int32
- **AccountLogin**: Guid:string, EmailAddress:string, DisplayName:string, AccountLoginActive:boolean, IsMFAConfirmed:boolean, IsMFAEnabledByAgent:boolean, ShouldUserSetupMFA:boolean, IsPartnerAgent:boolean, EntityType:int32
- **AccountLoginNotificationSetting**: ID:int32, IsEnabled:boolean, LastUpdated:date-time, Source:string, NotificationType:int32, Description:string
- **AccountLoginSummary**: Guid:string, EmailAddress:string, DisplayName:string, EntityType:int32
- **AccountLoginWithRoomMemberProfile**: Guid:string, EmailAddress:string, DisplayName:string, AccountLoginActive:boolean, IsMFAConfirmed:boolean, IsMFAEnabledByAgent:boolean, ShouldUserSetupMFA:boolean, IsPartnerAgent:boolean, RoomMemberProfileSummary:RoomMemberProfileSummaryWithChatToken, EntityType:int32
- **AccountSetting**: IncludeTransfers:boolean, Unsubscribe:boolean, AWI_RemindMeLater:boolean, AccountDeleted:boolean, LastUpdatedUnSubscribe:date-time, SavedLeadApplicationXml:string, SavedMobileLeadApplicationXml:string, WaysToSavePrefsReminderDate:date-time, FinServicePrefsReminderDate:date-time, EmphasiseProperty:boolean, ShowHiddenTransactions:boolean, ShowOnlyCategoriesWithTransactions:boolean, ShowHiddenWealthItem:boolean, IncludeLoanTransactionsInCashflow:boolean, HideTransactionHint:boolean, HideWealthItemHint:boolean, HideAccount:boolean, IndividualPayment:boolean, AlternateVerifiedEmailAddress:string
- **AccountsCredentialsGroupForIntegration[AccountForDocumentsIntegration]**: CredentialsCobrandGuid:string, CredentialsAccountLoginGuid:string, CredentialsAccountLoginEmailAddress:string, Credentials:object, AccountsForIntegration:array<AccountForDocumentsIntegration>
- **ActivateRaUserModel**: Email:string
- **ActivateRaUserModelWithUserName**: FirstName:string, LastName:string, MiddleName:string, Email:string
- **ActivateUserMembershipModel**: EncryptedEmail:string, Password:string, Token:string
- **AddClientBasicInfoResponse**: CobrandCustomPlans:array<CobrandCustomPlan>, Plans:array<PlanTemplate>, EnableOnboardingJourneyTemplate:boolean, FactFinds:array<MoafCobrandTemplate>, Onboarding:array<MoafCobrandTemplate>, Tax:array<MoafCobrandTemplate>, DefaultMoafCobrandTemplateId:int32
- **AddClientsForImportViewModel**: IntegrationActionId:int32, ClientsForImport:array<IntegrationClientForImportViewModel>, ErrorMessages:array<string>
- **AddEntitiesForImportViewModel**: IntegrationActionId:int32, EntitiesForImport:array<IntegrationEntityForImportViewModel>, ErrorMessages:array<string>
- **AddInvestmentFundsForImportViewModel**: IntegrationActionId:int32, InvestmentFundsForImport:array<IntegrationInvestmentFundForImportViewModel>, ErrorMessages:array<string>
- **AddMemberViewModel**: Name:string, Email:string, Role:int32, Relationship:int32, GuestPermissionLevel:int32
- **AddPartnerAgentsForImportViewModel**: IntegrationActionId:int32, PartnerAgentsForImport:array<IntegrationPartnerAgentForImportViewModel>, ErrorMessages:array<string>
- **AddRoomCobrandInvitationViewModel**: CobrandGuid:string
- **AddRoomFromServiceViewModel**: ServiceID:int32, RoomName:string, RoomDescription:string
- **Address**: Unit:string, StreetNumber:string, StreetName:string, AddressStreet:string, City:string, State:string, StateID:int32, PostCode:string, Country:string
- **AddressModel**: Unit:string, StreetNumber:string, StreetName:string, AddressStreet:string, City:string, State:string, StateID:int32, PostCode:string
- **AddressModelV1**: Unit:string, StreetName1:string, StreetName2:string, City:string, PostCode:string, StateTitle:string, CountryTitle:string, State:int32, Country:int32
- **AgentInfo**: CobrandId:int32, ShouldSendActivationEmailManualDocSigning:boolean, EnableAllowSameEmailAddress:boolean, ShowAddDocumentOption:boolean, HasPermissionToAddDocument:boolean
- **AnnuityRetirementIncome**: ID:int32, PaymentFrequency:int32, CurrentValue:double, CreateDate:date-time, LastUpdated:date-time, Provider:string, PensionBalance:double, Taxable:double, CentrelinkDeductibleAmount:double, IsTransitionToRetirement:boolean, Beneficiaries:array<Member>, BeneficiaryType:int32, ProportionOfFund:string, MemberNo:string, TaxFreeAmount:double, Owners:array<ItemOwner>
- **AppTokenBrandModel**: AppToken:string, BrandingLevelType:int32
- **AsxListedCompany**: Code:string, Company:string, IsListed:boolean, LastSnapshotDate:date-time, LatestPrice:double, PreviousSnapshotDate:date-time, PreviousPrice:double, PercentChange:double, PriceChange:double
- **BankAccountAndDepositModel**: AccountName:string, AvailableBalance:double, CurrentBalance:double, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **BranchModel**: CobrandUniqueId:string, CobrandName:string, PhoneNumber:string, EmailAddress:string, About:string, WebsiteUrl:string, StreetNumber:string, StreetName:string, Suburb:string, Postcode:string, StreetTypeId:int32, StateId:int32, CountryId:int32
- **BusinessModel**: ReportingCategory:int32, BusinessMultiplier:double, BusinessAmount:double, BusinessMetric:int32, BusinessUseAdvanced:boolean, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **BusinessWealthItemDetails**: BusinessMultiplier:double, BusinessAmount:double, BusinessMetric:int32, BusinessUseAdvanced:boolean
- **CarLeaseModel**: LifestyleOrInvestment:int32, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **CashflowBudgetViewModel**: TransactionSource:int32, TransactionCategoryId:int32, BudgetValue:double, StartDate:date-time, EndDate:date-time
- **CashflowCategoryBudget**: Type:int32, Category:TransactionCategory, TotalBudget:double, TotalAmount:double, IsBudgeted:boolean
- **CashflowCategoryBudgetFilter**: Categories:array<string>, Tags:array<string>, WealthItems:array<int32>, StartDate:date-time, EndDate:date-time, SearchString:string
- **CashflowCategoryFilter**: Categories:array<string>, Tags:array<string>, WealthItems:array<int32>, StartDate:date-time, EndDate:date-time, SearchString:string, PendingReview:boolean, TransactionType:int32, Page:int32, PageSize:int32, OrderBy:string, Ascending:boolean
- **CashflowSettingsModel**: IncludeTransfers:boolean, ShowHiddenTransactions:boolean, ShowDuplicatedTransactions:boolean, ShowTransfersToLoanAccounts:boolean, IncludeLoanTransactionsInCashflow:boolean, ShowOnlyCategoriesWithTransactions:boolean
- **CashflowSummary**: Expenses:double, Income:double, HasCashflowItems:boolean
- **CashflowTransaction**: ID:int32, Title:string, TransactionDate:date-time, AllTransactionTags:array<CashflowTransactionTag>, TransactionCategory:TransactionCategory, Type:int32, TransactionAmountWithSign:double, AccountType:int32, AccountNumber:string, AccountName:string, WealthItemId:int32, WealthItemName:string, Owners:array<CashflowTransactionOwner>, ReferenceNote:string, FinAccountDisplayName:string, Reviewed:boolean, MatchingTransaction:CashflowTransaction, IsHidden:boolean, IsManual:boolean
- **CashflowTransactionOwner**: OwnerName:string, OwnerId:int32, FractionOwned:float, ExternalId:string, IsCreator:boolean
- **CashflowTransactionRule**: MatchPhrase:string, FromCategory:TransactionCategory, ToCategory:TransactionCategory, Owners:array<CashflowTransactionOwner>, Tags:array<CashflowTransactionTag>
- **CashflowTransactionRuleTask**: ID:int32, Status:int32
- **CashflowTransactionSummary**: ID:int32, AccountType:int32, AccountName:string, AccountID:int32, Category:TransactionCategory, Type:int32, Description:string, Date:date-time, Amount:double, Owners:array<CashflowTransactionOwner>, HasMatchingTransaction:boolean, Tags:array<CashflowTransactionTag>, IsHidden:boolean, AmountWithSign:double, Reviewed:boolean
- **CashflowTransactionTag**: Id:string, Description:string, FlagType:int32, TaxFlagType:int32
- **ClientCommunication**: Id:int32, FrequencyType:int32, Enabled:boolean, DisabledByCobrand:boolean, Title:string, Description:string
- **ClientDetailsLite**: PersonDetails:PersonDetailsLite, CompanyDetails:CompanyDetailsLite, ID:int32, Name:string
- **ClientExportIntegrationAction**: Data:ClientExportIntegrationActionData, ID:int32, IntegrationActionType:int32, IntegrationStatus:int32, CredentialsCobrandGuid:string, CredentialsAccountLoginGuid:string, CredentialsAccountLoginEmailAddress:string, Credentials:object, AccountLoginGuid:string, AccountLoginEmailAddress:string
- **ClientExportIntegrationActionData**: ShouldUpdateLinkedClients:boolean, ShouldCreateUnlinkedClients:boolean, ClientsForExport:array<IntegrationClientForExport>
- **ClientGroup**: Individuals:array<Individual>, WorkspaceId:string, AccountId:int32, GroupId:int32, DisplayName:string, EmailList:array<string>, IsHouseholdClient:boolean, EntityType:int32, PartnerHasPermissionToViewPortal:boolean, AccountantsNamesJoined:string, PlanId:int32, IsDemo:boolean
- **ClientNotificationItem**: Description:string, SubDescription:string, NotificationData:object, NotificationType:int32, CompletedDateTime:date-time, NotificationDateTime:date-time, NotificationToken:string, IsOwnAccount:boolean
- **ClientSettingsPermission**: LockSettings:boolean, ShowNotificationsSetting:boolean, ShowSecuritySetting:boolean, DisablePreferenceSetting:boolean, PreferenceTarget:int32, EntityType:int32
- **CloseRoomViewModel**: RoomID:int32, ClosureReason:int32, RoomRating:int32, Comments:string
- **Cobrand**: Token:string, DisplayName:string, HideRegistration:boolean, RegionSettings:RegionSettings, SubscriptionPlanId:int32, DomainName:string
- **CobrandCustomPlan**: ID:int32, Name:string, Price:double
- **CobrandSummary**: ID:int32, Guid:string, Token:string, DisplayName:string, CobrandType:int32, IsActive:boolean, IsMemberPlan:boolean, IsPlusPlan:boolean, HeaderImagePath:string, IconImagePath:string, BookMarkIconImagePath:string, BackgroundImgRegPath:string, HighlightImgRegPath:string, IsWhiteHeader:boolean, DesktopSiteUrl:string, MobileSiteUrl:string, NotificationBaseUrl:string, CreateDate:date-time, MpPlanType:int32
- **CompanyClientDetails**: CompanyDetails:CompanyDetailsLite, ID:int32, Name:string
- **CompanyDetailsLite**: CompanyName:string, CompanyType:int32
- **CompanyEntityDetails**: CompanyName:string, CompanyType:int32, ACN:string, ABN:string, DateOfIncorporation:date-time
- **CompanyInfo**: CompanyType:int32, ACN:string, ABN:string, DateOfIncorporation:date-time, LinkedTo:LinkedInfo, PendingClientPortalRequest:boolean, PhoneWork:string
- **CompanyRequestWorkspaceModel**: ID:int32, ConnectionId:int32, Relationship:int32, Note:string
- **ConnectClientRequest**: Email:string, Name:string, SendInvitation:boolean, EntityType:int32, CompanyType:int32, PreferenceTarget:int32, PlanId:int32, IsCustomPlan:boolean, OnboardingTemplateId:int32, CoownerEmail:string, CoownerName:string, HouseholdDisplayName:string, IntegrationType:int32, Tenant:string, ExternalID:string, CoownerExternalID:string, Metadata:string, CoownerMetadata:string
- **ConnectClientResponse**: WorkspaceId:string, PartnerMemberEntityId:int32, ClientDisplayName:string
- **Contribution**: ConcessionalValue:string, NonConcessionalValue:string, Date:date-time
- **Country**: Id:int32, Name:string, Description:string
- **CreditCardModel**: AccountName:string, AccountHolder:string, MinPayment:double, RunningBalance:double, LimitAmount:double, ManualFrequency:int32, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **CustomTransactionCategory**: ID:int32, Description:string, TransactionType:int32
- **DashboardInfo**: CashflowSummary:CashflowSummary, WealthSummary:WealthSummary, DashboardCta:int32, DashboardTool:int32, AvatarToken:string, AvatarUrl:string, ShouldShowGetStartedWizard:boolean, AccountInfo:Account, FirmTools:array<FirmAppTool>, OutOfDateWealthItems:array<int32>, RoomsEnabled:boolean
- **DebtReductionGoalCalculation**: DebtReductionGoalInput:DebtReductionGoalInput, DebtReductionGoalOutPut:DebtReductionGoalOutput
- **DebtReductionGoalInput**: ID:int64, Timestamp:date-time, Principal:double, TargetAmount:double, InstalmentAmount:double, InterestRate:double, InterestFrequency:int32, DurationYears:int32, DurationMonths:int32, StartDate:date-time, BankAccount:WealthItemSummary, CalculationTarget:int32
- **DebtReductionGoalOutput**: ID:int64, Timestamp:date-time, Principal:double, TargetAmount:double, InstalmentAmount:double, InterestRate:double, InterestFrequency:int32, DurationYears:int32, DurationMonths:int32, StartDate:date-time, BankAccount:WealthItemSummary, CalculationTarget:int32, Projections:array<DebtReductionProjection>, ProgressPoints:array<GoalProgressPoint>, ProgressPercent:double, TotalInterestPayable:double
- **DebtReductionProjection**: Date:date-time, Term:int32, PrincipalOutstanding:double, Instalment:double, InterestRepaid:double, CapitalRepaid:double
- **DeleteAccountModel**: EmailAddress:string, Password:string
- **DetailedAddress**: StreetNumber:string, StreetName:string, InternationalPostcode:string, StreetType:int32, Suburb:string
- **DirectoryCobrand**: Guid:string, Token:string, DisplayName:string, HeaderImagePath:string, WhiteHeader:boolean, HomeUrl:string, PhoneNumber:string, EmailAddress:string, DetailedAddress:DetailedAddress, About:string
- **DocsSyncModel**: DocumentIds:array<int32>, SyncTypes:array<int32>
- **Document**: ID:int32, Created:date-time, LastUpdated:date-time, Parent:DocumentParent, File:DocumentFileReference, Description:string, TaxationType:int32, AdviceItemType:int32, TaxReturnDocType:int32, DocumentType:int32, DocumentSigningStatus:int32, DocumentSigners:array<DocumentSignerSummary>, IsProtectedMadeBy:AccountLoginSummary, IsProtected:boolean, ThirdPartyIntegrationExternalId:string, CreatedByAccountLoginId:int32, UploadedEntityId:int32, CreatedBy:string, IsFirmLevelCreation:boolean, DocumentNote:string
- **DocumentAndPackageSummary**: ID:int32, Name:string, Description:string, IsLocked:boolean, CreatedOn:date-time, Created:date-time, LastUpdated:date-time, ParentItem:DocumentParentItemInfo, Parent:DocumentParentItemInfo, Location:string, FolderId:int32, CreatedBy:string, CreatedByEntityId:int32, Documents:array<DocumentModel>, ShowDownloadEvidenceSummary:boolean, ShowBundledDocumentWithEvidenceSummary:boolean, IsPackaged:boolean, IsPackage:boolean, AgentDisplayName:string, Recipients:array<SignRecipient>, ProviderName:string, SigningStatus:int32, CanDelete:boolean, CanChangeLockStatus:boolean, CanView:boolean, DocumentSigningSource:int32, SigningOrderEnabled:boolean
- **DocumentFileReference**: FileName:string, MimeType:string, Bytes:int32, FileRef:string, FileLastUpdated:date-time, FileContentHash:string, DownloadUrl:string
- **DocumentForIntegration**: LastSyncedFileTimestamp:date-time, LastSyncedFileContentHash:string, LastSyncedExternalFileTimestamp:date-time, LastSyncDirection:int32, IsSyncRequired:boolean, ForceSyncDirection:int32, ID:int32, Created:date-time, LastUpdated:date-time, Parent:DocumentParent, File:DocumentFileReference, Description:string, TaxationType:int32, AdviceItemType:int32, TaxReturnDocType:int32, DocumentType:int32, DocumentSigningStatus:int32, DocumentSigners:array<DocumentSignerSummary>, IsProtectedMadeBy:AccountLoginSummary, IsProtected:boolean, ThirdPartyIntegrationExternalId:string, CreatedByAccountLoginId:int32, UploadedEntityId:int32, CreatedBy:string, IsFirmLevelCreation:boolean, DocumentNote:string
- **DocumentGroupUploadedNotificationModel**: AccountId:int32, Amount:int32, DocumentGroupId:int32
- **DocumentModel**: ID:int32, FileName:string, CreatedOn:date-time, Created:date-time, LastUpdated:date-time, DocumentNote:string, DownloadUrl:string, FolderId:int32, IsLocked:boolean, CanChangeLockStatus:boolean, CreatedBy:string, CreatedByEntityId:int32, CreatedByAccountLoginId:int32, IsFirmLevelCreation:boolean
- **DocumentParent**: ID:int32, Title:string, DocumentParentType:int32, DocumentGroupId:int32
- **DocumentParentItemInfo**: ID:int32, Title:string, ParentType:int32
- **DocumentSignerSummary**: ID:int32, AccountLogin:AccountLoginSummary, Email:string, FirstName:string, LastName:string, HasSigned:boolean, SignedOnDate:date-time, SigningStatus:int32, CompletedOnDate:date-time, LastUpdated:date-time, RequestOnDate:date-time, SignToken:string
- **EmploymentDetails**: ID:int32, EntityID:int32, OwnerName:string, ExternalEntityID:string, Specialisations:string, CreateDate:date-time, LastUpdated:date-time, DateEmployed:date-time, EmploymentStatus:int32, Employer:string, JobTitle:string, BusinessName:string, Occupation:string, HasEverBeenDirector:boolean, HasEverBankrupt:boolean, Centerlink:string, IsTaxResidentOfForeignCountry:boolean, YearsInTheRole:int32, IntendToChangeEmployment:boolean, RecentlyMadeRedundant:boolean, OptionToSalarySacrifice:boolean, HaveWorkedOverseas:boolean, HasBudget:boolean, HasTaxDue:boolean, StickToBudget:boolean, HasMajorChangesToSalary:boolean, HasReceivedTerminationPayment:boolean, IsTransitionalTerminationPayment:boolean, IsDirectingToSuper:boolean, HasReceivedOtherPaymentsRelatedToTheTermination:boolean, HasReceivedOtherPaymentsRelatedToTheTerminationInSameFinancialYear:boolean, HasCashedETPBefore2007:boolean, HasToExitSuperannuation:boolean, IsCurrentlyWorking:boolean, IsSelfEmployed:boolean, EmployedSecureHoursPerWeek:boolean, EmployeePaymentType:boolean, HoursPerWeek:int32, SuperannuationGuarantee:double, PackagedItems:string, Qualifications:string, Salary:double, EmployerPhoneNumber:string, EmployerFaxNumber:string, EmployerAddressUnitNo:string, EmployerAddressStreet1:string, EmployerAddressStreet2:string, EmployerAddressSuburb:string, EmployerAddressState:int32, EmployerAddressPostcode:string, SectorType:int32, ABN:string, SickLeaveDays:int32, AnnualLeaveDays:int32, LongServiceLeave:int32, OtherLeaveDays:int32, CompanyStructure:int32, SalaryType:int32, Industry:int32, FringeBenefits:double, OtherEarningsAmount:double, CompanyDividendsAmount:double, TaxDueAmount:double, RebateAmount:double, UnusedAnnualLeavePayment:double, UnusedLongServiceLeavePayment:double, RedundancyPayment:double, GrossSeverancePayment:double, TaxFreeAmountOfSeverancePayment:double, ETPTotalAmount:double, ETPTaxfreeComponent:double, ETPTaxableComponent:double, EmployeeExGratia:double, EmployeeTotal:double, EmployeeTerminationPreservedAmount:double, EmployeeTerminationSuperannuationPension:double, EmployeePaymentDate:double, TaxableAllowancesEarned:double, ReportableEmployerSuperannuationContribution:double, TotalEmploymentIncome:double, TotalTaxWithheld:double, TotalAllowancesEarned:double, SelfEmployedNetProfitCurrent:double, SelfEmployedNetProfitPrevious:double, SelfEmployedAddBacksCurrent:double, SelfEmployedAddBacksPrevious:double, EmploymentStatusDetails:string, Notes:string, SalaryChangeDetails:string, OverseasWorkExperienceDetails:string, IntendToChangeEmploymentDate:date-time, ReasonForTermination:string, SalaryPackagingProvider:string, EmploymentSecurity:string, OtherCompanyStructure:string, MainDutiesOfRole:string, ETPCeaseDate:date-time, PeriodFrom:date-time, PeriodTo:date-time, NextSalaryReviewDate:date-time, DutySplitAdmin:double, DutySplitSupervisory:double, DutySplitTravel:double, DutySplitManual:double, SuperannuationGuaranteePercentage:double
- **Entity**: ID:int32, Title:string, Name:string, ImageToken:string, ImageUrl:string, Created:date-time, LastReviewed:date-time, Address:EntityAddress, EntityType:int32, AutoAddTaxYearsAndAdvice:boolean, ExternalID:string, CompanyEntityDetails:CompanyEntityDetails, PersonEntityDetails:PersonEntityDetails
- **EntityAddress**: AddressUnitNo:string, AddressStreet1:string, AddressStreet2:string, AddressSuburb:string, AddressPostcode:string, AddressState:int32, Country:int32
- **EntityModel**: ID:int32, Name:string, ExternalId:string
- **EntityRelationship**: Id:int32, Name:string, Description:string, IsProfessional:boolean
- **EntitySummary**: ID:int32, Name:string, Title:string, ImageToken:string, ImageUrl:string, AddressUnitNo:string, AddressStreetType:string, AddressStreet1:string, AddressStreet2:string, AddressSuburb:string, AddressState:int32, AddressPostcode:string, PreferredEmailAddress:string, PreferredTelephone:string, FirstName:string, MiddleName:string, LastName:string, DisplayName:string, DateOfBirth:date-time, Relationship:int32, CompanyType:int32, IsOwner:boolean, AccountLogin:AccountLoginSummary
- **Expense**: ID:int32, EstimatedAmount:double, CreateDate:date-time, LastUpdated:date-time, PlannedTime:date-time, Description:string, Type:string, Frequency:int32, IsTaxDeductible:boolean, ExpenseType:int32, Owners:array<ItemOwner>
- **ExternalConnectionItem[InsuranceCover]**: ID:int32, ExternalID:string, Metadata:string, Category:int32
- **FinancialAccountWealthItemDetails**: AccountName:string, BankAccountType:int32, CreditCardProvider:string, CreditCardReferenceNumber:string, CreditCardExpiryDate:date-time, CreditLimit:double, CreditCardType:int32, InstitutionOrProvider:string, BSB:string, AccountNumber:string, InterestRate:float, LoanOriginalTerm:string, LoanOriginalLoanAmount:double, LoanStartDate:date-time, LoanExpiryDate:date-time, LoanRepaymentAmount:double, LoanRepaymentFrequency:int32, LoanRateType:int32, ExtraRepaymentFeature:int32, LoanType:int32, TermDepositInterestPaymentFrequency:int32, TermDepositInvestmentDate:date-time, TermDepositMaturityDate:date-time, SuperMemberNumber:string, SuperLifeInsuranceSumInsured:double, SuperTPDSumInsured:double, NumberOfUnits:double, CurrentUnitPrice:double, SuperDateJoinedFund:date-time, SuperPreservedAmount:double, SuperNonPreservedAmount:double, SuperBenefitType:int32, SuperNominatedBeneficiary:string, SuperBindingDeathBenefitNomination:boolean, SuperBDBNExpiry:date-time, WebSiteAddress:string, BalloonOrResidualPercentage:float, BalloonResidualPaymentAmount:double, CarLeaseTerm:string, SuperInvestmentType:int32, AccountHolders:object, TaxFree:double, TaxableTaxedElement:double, TaxableUntaxedElement:double, IsAuthenticationError:boolean, ProviderId:int64, ProviderAccountId:int64, IsOpenBankingEnabled:boolean, IsEligibleForRefreshOrUpdate:boolean, ToBeMigratedToOpenBanking:boolean, IsDestinationForMigratingToOpenBankingEnabled:boolean, IsProviderSupported:boolean, IsProviderEnabled:boolean, IsEligibleForConversionToManualWealthItem:boolean, HasYodleeData:boolean, IsOpenBankingConsentRequired:boolean, ProviderLoginUrl:string
- **FinancialInstrument**: Id:int32, Exchange:int32, InstrumentType:int32, Code:string, InstrumentName:string, IsListed:boolean, LatestSnapshotDate:date-time, LatestPrice:double, PreviousSnapshotDate:date-time, PreviousPrice:double, PercentChange:double, PriceChange:double, APIRCode:string
- **FirmAppTool**: Name:string, Text:string, Url:string, Type:int32, DisplayOrder:int32, IsActive:boolean
- **Folder**: ID:int32, Name:string, IsSystemFolder:boolean, ParentFolderId:int32, CreatedOn:date-time, CanDelete:boolean, FixName:string, CreatedByAccountLoginId:int32, CreatedByEntityId:int32, CreatedBy:string, IsCreatedByStaffMember:boolean
- **FolderAndDocumentMove**: Ids:array<int32>, DestinationId:int32, Type:int32
- **FundValue**: Value:string
- **GetActivationUrlRequest**: UserId:string
- **GetOrCreateMembershipRequest**: Email:string
- **GetOrCreateMembershipResponse**: Email:string, Auth0UserId:string, UserId:string, IsNewlyCreated:boolean, IsActivated:boolean, DeactivateDate:date-time
- **Goal**: ID:int32, GoalType:int32, Name:string, Description:string, Due:date-time, Created:date-time, DisplayStatus:int32, Achieved:date-time, ImageToken:string, ImageUrl:string, SavingsCalculation:SavingsGoalCalculation, DebtReductionCalculation:DebtReductionGoalCalculation, Status:int32
- **GoalProgressPoint**: Date:date-time, Amount:double
- **GoalSummary**: ID:int32, Name:string, Due:date-time, DisplayStatus:int32, Status:int32, GoalTarget:double, GoalType:int32, ImageToken:string, ImageUrl:string
- **HasPermissionViewModel**: PermissionType:int32
- **HouseholdOwnerDTO**: OwnerId:int32, OwnerName:string
- **Income**: ID:int32, Value:double, CreateDate:date-time, LastUpdated:date-time, Source:string, Frequency:int32, IsTaxable:boolean, IncomeType:int32, WindfallYear:int32, WindfallAge:int32, Recipient:string, Notes:string, Owners:array<ItemOwner>
- **Individual**: AccountLoginId:int32, DisplayName:string, Email:string, EntityId:int32, EntityType:int32, IsPartnerAgent:boolean
- **InsuranceCover**: ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntities:array<EntityModel>, OwnerEntity:EntityModel, InsuranceCoverType:int32, InsuranceSubType:int32, SumInsured:double, BenefitAmount:double, BenefitFrequency:int32, BenefitPeriod:int32, WaitingPeriod:int32, InsuranceCoverDefinition:int32, RegularDriver:EntityModel, Drivers:array<EntityModel>
- **InsuranceGeneralBoatCover**: OwnerEntity:EntityModel, RegularDriver:EntityModel, Drivers:array<EntityModel>, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, SumInsured:double
- **InsuranceGeneralGenericCover**: InsuranceCoverType:int32, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, OwnerEntity:EntityModel, SumInsured:double
- **InsuranceGeneralVehicleCover**: OwnerEntity:EntityModel, RegularDriver:EntityModel, Drivers:array<EntityModel>, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, SumInsured:double
- **InsuranceHealthCover**: ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntities:array<EntityModel>, OwnerEntity:EntityModel, InsuranceCoverType:int32, InsuranceSubType:int32, BenefitAmount:double, BenefitPeriod:int32, WaitingPeriod:int32
- **InsurancePersonalAdditionalRiderBenefitCover**: InsuranceSubType:int32, SumInsured:double, BenefitFrequency:int32, WaitingPeriod:int32, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel, OwnerEntity:EntityModel
- **InsurancePersonalBloodBorneDiseaseCover**: SumInsured:double, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalBusinessExpenseCover**: InsuranceSubType:int32, BenefitAmount:double, BenefitFrequency:int32, BenefitPeriod:int32, WaitingPeriod:int32, InsuranceCoverDefinition:int32, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalIncomeProtectionCover**: InsuranceCoverDefinition:int32, InsuranceSubType:int32, BenefitAmount:double, BenefitFrequency:int32, BenefitPeriod:int32, WaitingPeriod:int32, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalLifeCover**: InsuranceSubType:int32, SumInsured:double, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalSeverityBasedCover**: SumInsured:double, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalTpdCover**: InsuranceSubType:int32, SumInsured:double, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePersonalTraumaCover**: InsuranceSubType:int32, SumInsured:double, OwnerEntity:EntityModel, ID:int32, InsurancePolicy_ID:int32, ExternalPolicyId:string, InsuredEntity:EntityModel
- **InsurancePolicy**: ID:int32, Name:string, PolicyNumber:string, InsurerName:string, PremiumAmount:double, PremiumPaymentFrequency:int32, PremiumType:int32, IsIncludedInSuper:boolean, PolicyType:int32, Owners:array<ItemOwner>, ReferenceNote:string
- **IntegratedItemFilter**: ItemFilter:ItemFilter, IntegrationFilter:IntegrationFilter
- **IntegratedItem[InsuranceCover]**: Item:InsuranceCover, AccountId:int32, IntegrationType:int32, TenantIdentifier:string, ExternalIntegrations:array<ExternalConnectionItem[InsuranceCover]>
- **IntegrationAction**: ID:int32, IntegrationActionType:int32, IntegrationStatus:int32, CredentialsCobrandGuid:string, CredentialsAccountLoginGuid:string, CredentialsAccountLoginEmailAddress:string, Credentials:object, AccountLoginGuid:string, AccountLoginEmailAddress:string
- **IntegrationClient**: ExternalID:string, CalculatedFirstAndLastName:string, DisplayName:string, Email:string, HasSpouse:boolean, IsPrimary:boolean, SupportEntityAsClient:boolean, EntityType:int32, CompanyType:int32, Tenant:string
- **IntegrationClientAccountOwnerExportStatusViewModel**: AccountLoginGuid:string, IsSuccess:boolean, ExternalId:string, ThirdPartyClientBeforeUpdateXml:string, ThirdPartyClientAfterUpdateXml:string
- **IntegrationClientExportStatusViewModel**: AccountGuid:string, AccountOwnerExportStatuses:array<IntegrationClientAccountOwnerExportStatusViewModel>
- **IntegrationClientForExport**: AccountGuid:string, AccountOwners:array<IntegrationClientForExportAccountOwner>
- **IntegrationClientForExportAccountOwner**: AccountLoginGuid:string, ExternalId:string, Title:int32, Name:string, PreferredName:string, DateOfBirth:date-time, Gender:int32, EmailAddress:string, HomeEmail:string, WorkEmail:string, MobilePhoneNumber:string, OfficePhoneNumber:string, HomePhoneNumber:string, PreferredPhoneNumber:string, FaxNumber:string, HomeAddressUnitNo:string, HomeAddressStreet1:string, HomeAddressStreet2:string, HomeAddressSuburb:string, HomeAddressState:int32, HomeAddressPostcode:string, PostalAddressUnitNo:string, PostalAddressStreet1:string, PostalAddressStreet2:string, PostalAddressSuburb:string, PostalAddressState:int32, PostalAddressPostcode:string, WorkAddressUnitNo:string, WorkAddressStreet1:string, WorkAddressStreet2:string, WorkAddressSuburb:string, WorkAddressState:int32, WorkAddressPostcode:string, PreferredContactMethod:int32, PlaceOfBirth:string, Nationality:string, IsAustralianCitizen:boolean, CountryOfResidence:string, ResidentStatus:int32, MaritalStatus:int32
- **IntegrationClientForImportViewModel**: PartnerAgentEmailAddress:string, PartnerAgentExternalId:string, ExternalId:string, Title:int32, Name:string, PreferredName:string, DateOfBirth:date-time, Gender:int32, EmailAddress:string, HomeEmail:string, WorkEmail:string, MobilePhoneNumber:string, OfficePhoneNumber:string, HomePhoneNumber:string, PreferredPhoneNumber:string, FaxNumber:string, IsBusiness:boolean, HomeAddressUnitNo:string, HomeAddressStreet1:string, HomeAddressStreet2:string, HomeAddressSuburb:string, HomeAddressState:int32, HomeAddressPostcode:string, PostalAddressUnitNo:string, PostalAddressStreet1:string, PostalAddressStreet2:string, PostalAddressSuburb:string, PostalAddressState:int32, PostalAddressPostcode:string, WorkAddressUnitNo:string, WorkAddressStreet1:string, WorkAddressStreet2:string, WorkAddressSuburb:string, WorkAddressState:int32, WorkAddressPostcode:string, PreferredContactMethod:int32, PlaceOfBirth:string, Nationality:string, IsAustralianCitizen:boolean, CountryOfResidence:string, ResidentStatus:int32, MaritalStatus:int32, ClientGroupId:string, IsCoowner:boolean
- **IntegrationDocumentSyncStatusViewModel**: DocumentID:int32, IsSuccess:boolean, DocumentSyncDirection:int32, ExternalId:string, ExternalFileTimestamp:date-time, FileTimestamp:date-time, FileContentHash:string
- **IntegrationEntityForImportViewModel**: ClientEmailAddress:string, ClientExternalId:string, ExternalId:string, Name:string, EntityType:string
- **IntegrationFilter**: AccountId:int32, IntegrationType:int32, ExternalConnectionCategory:int32, TenantIdentifier:string
- **IntegrationInvestmentFundForImportViewModel**: ClientEmailAddress:string, ClientExternalId:string, ExternalId:string, FundCode:string, FundName:string, FundType:int32
- **IntegrationLog**: CobrandGuid:uuid, PartnerAccountLoginGuid:uuid, ClientAccountGuid:uuid, IntegrationEvent:int32, IntegrationItemType:int32, ItemId:int32, IntegrationType:int32, LoggedEventDateTime:date-time, IntegrationLogStatus:int32, Message:string
- **IntegrationLogForItem**: IntegrationEvent:int32, IntegrationItemType:int32, ItemId:int32, IntegrationType:int32, LoggedEventDateTime:date-time, IntegrationLogStatus:int32, Message:string
- **IntegrationPartnerAgentForImportViewModel**: ExternalId:string, Name:string, EmailAddress:string, IsDefault:boolean, IsAdmin:int32, OverrideExisting:boolean
- **IntegrationSearchItem**: IntegrationType:int32, DisplayName:string, IsConnected:boolean
- **IntegrationStatus**: CobrandGuid:uuid, PartnerAccountLoginGuid:uuid, ClientAccountGuid:uuid, IntegrationItemType:int32, ItemId:int32, IntegrationType:int32, IntegrationEvent:int32, StatusDateTime:date-time, Status:int32, Message:string, ExtraDetails:object
- **InternalBrandingSlim**: Id:int32, Name:string, Type:int32, Code:string
- **InvestmentAccount**: ID:int32, FundCode:string, AccountName:string, AccountType:string, AccountHoldersAndBalances:object, TotalBalance:double, InvestmentHoldings:array<InvestmentHolding>, Transactions:array<InvestmentTransaction>, InvestmentFundId:int32, AsOfDate:date-time, TenantExternalIdMap:object
- **InvestmentBrand**: ID:int32, BrandName:string, FundListLastUpdated:date-time, FundProvider:int32, UpdateRequired:boolean, CobrandId:int32, PartnerAccountLoginID:int32, FundCredentials:object
- **InvestmentFund**: ID:int32, CobrandId:int32, PartnerAccountLoginID:int32, FundCode:string, FundName:string, FundType:string, ExternalID:string, FundLastUpdated:date-time, UpdateRequired:boolean, AsOfDate:date-time, FundCredentials:object
- **InvestmentHolding**: ID:int32, InvestmentAccountID:int32, AccountType:string, Exchange:string, Symbol:string, Quantity:double, Price:double, Value:double, PercentageAllocation:double, PercentageChange:double, Description:string, PriceAsofDate:date-time, LinkedBankAccountNumber:string
- **InvestmentPortfolioModel**: AccountName:string, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **InvestmentSuperAndDbsModel**: AccountName:string, AccountHolder:string, EmployerContributions:double, SalarySacrifice:double, AfterTaxContribution:double, AccountHolder1Balance:double, LinkedBankAccountNumber:string, Cash:double, FundsAvailable:double, TotalInvestedAmount:double, TaxableTaxedElement:double, TaxableUntaxedElement:double, TaxFree:double, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **InvestmentTransaction**: ID:int32, TransactionDate:date-time, TransactionAmount:double, TransactionBaseType:int32, Description:string, TransactionAmountCurrencyCode:string, Notes:string, MerchantName:string, TransactionType:string, TransactionId:string, RunningBalance:double
- **ItemFilter**: Page:int32, PageSize:int32, Ascending:boolean, ParentId:int32
- **ItemOwner**: OwnerId:int32, FractionOwned:float, ExternalId:string, OwnerName:string
- **KeyValuePair[Int32,String]**: key:int32, value:string
- **LegalAuthorityElement**: IsLegalAuthority:boolean, SectionName:string, Enabled:boolean
- **LegalAuthoritySection**: IsLegalAuthority:boolean, SectionName:string, Show:boolean
- **LifeGoal**: ID:int32, Priority:int32, Category:int32, Status:int32, TimeFrame:int32, TargetDate:date-time, CreateDate:date-time, LastUpdated:date-time, LastModifiedDate:date-time, Name:string, GoalDescription:string, ImportantDetails:string, FinancialConcerns:string, ExpectedAmount:double, CashReserve:double, IsTimeFrameCritical:boolean, IsInScopeOfAdvice:boolean, IsNeedAccessToCapital:boolean, Owners:array<ItemOwner>
- **LinkedInfo**: GroupId:int32, Guid:string
- **LoanModel**: AccountName:string, InterestRate:double, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **ManualTransaction**: ParentId:int32, CategoryUniqueId:string, Amount:double, Description:string, Reference:string, TransactionBaseType:int32, TransactionDate:date-time
- **MarketplaceCobrand**: Guid:string, Token:string, DisplayName:string, HeaderImagePath:string, WhiteHeader:boolean, HomeUrl:string, PhoneNumber:string, EmailAddress:string, DetailedAddress:DetailedAddress, About:string
- **Member**: Name:string, Email:string, Phone:string, DateOfBirth:date-time, Relationship:string, IsPension:boolean, IsAccumulation:boolean
- **MemberExtendedItemFilter**: Family:boolean, Professionals:boolean, Companies:boolean, Connections:boolean, NotInTeam:boolean, SearchString:string, Page:int32, PageSize:int32, Ascending:boolean
- **MemberPensionAndContribution**: MemberId:string, DisplayName:string, Pension:Pension, Contribution:Contribution
- **MessageOut**: channels:array<string>, eventId:string, eventType:string, id:string, payload:object, tags:array<string>, timestamp:date-time
- **MoafCobrandTemplate**: ID:int32, Name:string
- **NavItem**: ID:int32, NavAction:int32, DisplayName:string, DisplayOrder:int32, Children:array<NavItem>
- **NetWorthAssetModel**: ReportingCategory:int32, LifestyleOrInvestment:int32, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **NetWorthCategoryModel**: ID:int32, Description:string
- **NetWorthLiabilityModel**: ReportingCategory:int32, LifestyleOrInvestment:int32, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **NetWorthOnwerModel**: FractionOwned:float, ID:int32, ExternalId:string, Name:string
- **Notification**: SourceId:int32, Type:int32, Description:string, SubDescription:string, CompletedDate:date-time, CreatedDate:date-time
- **OpportunityOriginSummary**: ID:int32, PreferenceID:int32, PreferenceTileText:string, PreferenceScorePreferenceID:int32, PreferenceScorePreferenceIsSystem:boolean, PreferenceScorePreferenceType:int32, CreatedDate:date-time, Priority:int32, PreferenceImportance:int32, PreferenceRating:int32
- **PagedResults[AsxListedCompany]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<AsxListedCompany>
- **PagedResults[BankAccountAndDepositModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<BankAccountAndDepositModel>
- **PagedResults[BusinessModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<BusinessModel>
- **PagedResults[CarLeaseModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<CarLeaseModel>
- **PagedResults[CashflowTransactionSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<CashflowTransactionSummary>
- **PagedResults[ClientDetailsLite]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<ClientDetailsLite>
- **PagedResults[ClientGroup]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<ClientGroup>
- **PagedResults[ClientNotificationItem]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<ClientNotificationItem>
- **PagedResults[CreditCardModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<CreditCardModel>
- **PagedResults[Document]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<Document>
- **PagedResults[FinancialInstrument]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<FinancialInstrument>
- **PagedResults[GoalSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<GoalSummary>
- **PagedResults[InsuranceCover]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InsuranceCover>
- **PagedResults[InsurancePolicy]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InsurancePolicy>
- **PagedResults[IntegratedItem[InsuranceCover]]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<IntegratedItem[InsuranceCover]>
- **PagedResults[IntegrationClient]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<IntegrationClient>
- **PagedResults[InvestmentFund]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InvestmentFund>
- **PagedResults[InvestmentHolding]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InvestmentHolding>
- **PagedResults[InvestmentPortfolioModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InvestmentPortfolioModel>
- **PagedResults[InvestmentSuperAndDbsModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<InvestmentSuperAndDbsModel>
- **PagedResults[LifeGoal]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<LifeGoal>
- **PagedResults[List[EmploymentDetails]]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<array<EmploymentDetails>>
- **PagedResults[List[Expense]]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<array<Expense>>
- **PagedResults[List[Income]]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<array<Income>>
- **PagedResults[List[LifeGoal]]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<array<LifeGoal>>
- **PagedResults[LoanModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<LoanModel>
- **PagedResults[MarketplaceCobrand]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<MarketplaceCobrand>
- **PagedResults[NetWorthAssetModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<NetWorthAssetModel>
- **PagedResults[NetWorthLiabilityModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<NetWorthLiabilityModel>
- **PagedResults[PartnerClient]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<PartnerClient>
- **PagedResults[PowerOfAttorney]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<PowerOfAttorney>
- **PagedResults[PropertyModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<PropertyModel>
- **PagedResults[RoomInvitation]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<RoomInvitation>
- **PagedResults[RoomMoafInstanceSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<RoomMoafInstanceSummary>
- **PagedResults[RoomSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<RoomSummary>
- **PagedResults[SharesModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<SharesModel>
- **PagedResults[Task]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<Task>
- **PagedResults[TodoSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<TodoSummary>
- **PagedResults[VehicleModel]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<VehicleModel>
- **PagedResults[WillSummary]**: PageNumber:int32, PageSize:int32, TotalNumberOfPages:int32, TotalNumberOfRecords:int32, Results:array<WillSummary>
- **PartnerAddClientModel**: Name:string, Email:string, AccountType:int32
- **PartnerAddClientResponse**: Status:int32, ClientAccount:PartnerClient
- **PartnerClient**: AccountGuid:string, CobrandGuid:string, IsActive:boolean, AddressStateTerritory:string, IsCurrentClient:boolean, ActivateDate:date-time, CreateDate:date-time, AccountOwners:array<PartnerClientAccountOwner>
- **PartnerClientAccountOwner**: AccountLoginGuid:string, EmailAddress:string, FirstName:string, MiddleName:string, LastName:string, PreferredEmailAddress:string, PreferredTelephone:string, NumberOfDependents:int32, EmploymentStatus:int32, PersonTitle:int32, DateOfBirth:date-time, Gender:int32, AddressUnitNo:string, AddressStreet1:string, AddressStreet2:string, AddressSuburb:string, AddressState:int32, AddressStateTerritory:string, AddressPostcode:string, AlternativeEmailAddress:string, TelephoneHome:string, TelephoneWork:string, TelephoneMobile:string, PreferredContactMethod:int32, IntendedRetirementAge:int32, LastReviewed:date-time, Occupation:string, Relationship:int32, ThirdPartyIntegrationExternalId:string
- **PartnerSaveClientThirdPartyIntegrationIdViewModel**: AccountLoginGuid:uuid, ThirdPartyIntegrationExternalId:string
- **PartnerSaveClientsThirdPartyIntegrationIdViewModel**: ClientsThirdPartyIntegrationId:array<PartnerSaveClientThirdPartyIntegrationIdViewModel>
- **PartnerSendNotificationToClientViewModel**: ClientAccountGuid:uuid, ClientAccountLoginGuid:uuid, NotificationTitle:string, NotificationEmailBody:string, PushNotificationMessage:string, SendEmailNotification:boolean, SendPushNotification:boolean, DocumentId:int32
- **PartnerUpgradeClientPlanModel**: ClientAccountGuid:uuid, MpPlanType:int32, PlanExpiryDate:date-time
- **PartnerUserInfo**: ID:string, FirstName:string, LastName:string, DisplayName:string, ProfileImage:string, EmailAddress:string
- **Pension**: MinValue:string, MaxValue:string, Date:date-time
- **PensionRetirementIncome**: ID:int32, PaymentFrequency:int32, CurrentValue:double, CreateDate:date-time, LastUpdated:date-time, Provider:string, PensionBalance:double, Taxable:double, CentrelinkDeductibleAmount:double, IsTransitionToRetirement:boolean, Beneficiaries:array<Member>, BeneficiaryType:int32, ProportionOfFund:string, MemberNo:string, TaxFreeAmount:double, Owners:array<ItemOwner>
- **PermissionElement**: PermissionSection:int32, Enabled:boolean, SubPermissions:array<PermissionElement>, Name:string, List:boolean, View:boolean, Write:boolean, Delete:boolean, ListDescription:string, ViewDescription:string, WriteDescription:string, DeleteDescription:string
- **PermissionsModel**: Permissions:array<PermissionElement>, LegalAuthority:LegalAuthorityElement
- **PermissionsSettingModel**: Wealth:SectionPermission, Cashflow:SectionPermission, Team:SectionPermission, ProfileAccountOwner:SectionPermission, Room:SectionPermission, Todo:SectionPermission, Goal:SectionPermission, Will:SectionPermission, Insurance:SectionPermission, Document:SectionPermission, Tax:SectionPermission, EnableRoomPermission:boolean, LegalAuthority:LegalAuthoritySection
- **PersonClientDetails**: PersonDetails:PersonDetailsLite, ID:int32, Name:string
- **PersonDetailsLite**: PreferredEmailAddress:string, PersonTitle:int32, FirstName:string, MiddleName:string, LastName:string, Relationship:int32
- **PersonEntityDetails**: PersonTitle:int32, FirstName:string, MiddleName:string, LastName:string, Relationship:int32, IsPrimary:boolean, PreferredEmailAddress:string, AlternativeEmailAddress:string, PreferredTelephone:string, TelephoneHome:string, TelephoneWork:string, TelephoneMobile:string, PreferredContactMethod:int32, DateOfBirth:date-time, IntendedRetirementAge:int32, RelationshipStatus:int32, NumberOfDependents:int32, Gender:int32, AllowGuestAccess:boolean, AccountLogin:AccountLoginSummary
- **PersonalHealthDetail**: ID:int32, OwnerName:string, ExternalEntityID:string, EntityID:int32, HealthStatus:int32, IsSmoker:boolean, KnownHealthIssues:string, HasPrivateHospitalCover:boolean, PrivateCoverDetails:string, HasRegularMedication:boolean, HasRejectedFromApplication:boolean, RejectionDetails:string, Height:double, Weight:double, ManualOfficeWorkRatio:double, HasHazardousHobbies:boolean, HasFamilyMedicalCondition:boolean, HasPreviousClaims:boolean, ClaimDetails:string, LastUpdated:date-time, CreateDate:date-time, Notes:string, HasSmoked:boolean, HasHealthIssue:boolean, HealthIssueDetails:string, FamilyMedicalConditionDetails:string, RegularMedicationDetails:string, SmokingQuitDate:date-time, SmokingCountPerDay:int32, PreviousInsuranceAssessment:int32
- **Plan**: ID:int32, Name:string, IsActive:boolean, IsPartnerPlan:boolean, IsBasic:boolean, Price:double, StripePlanId:int32, MpPlanType:int32
- **PlanTemplate**: ID:int32, Name:string, RegionedPlanPrice:double
- **PlanToDoOwner**: OwnerName:string, OwnerId:int32, FractionOwned:float, ExternalId:string, IsCreator:boolean
- **PlanTodoParent**: ID:int32, Title:string, PlanTodoParentType:int32
- **PowerOfAttorney**: ID:int32, EntityID:int32, OwnerName:string, ExternalEntityID:string, CreateDate:date-time, LastUpdated:date-time, Attorney:string, PowerOfAttorneyType:int32, ActiveFrom:date-time, DocumentLocation:string, OtherNotes:string, HasMarriedBefore:boolean, HaveChildrenFromPreviousMarriage:boolean, IsSolicitorRequired:boolean, IsGuardianshipInPlace:boolean, DateOfGuardianship:date-time, LastReviewDate:date-time, GuardianshipType:int32, Functions:string, GuardianName:string, PARelationship:string, PAContactDetails:string, PAExpiryDate:date-time
- **PreferenceOpportunity**: ID:int32, Account:Account, Service:ServiceSummary, OpportunityOrigins:array<OpportunityOriginSummary>, CreatedDate:date-time, LastUpdated:date-time, Status:int32
- **PreferenceSurveyModel**: ScorePreferenceId:int32, Description:string, PreferenceQuestion:string, PreferenceDisplayOrder:int32, PreferenceTitle:string, PreferenceText:string, ScorePreferenceType:int32, PreferenceRating:int32, PreferenceTarget:int32, PreferenceImportance:int32, Priority:int32, PreferenceTileText:string
- **PropertyModel**: Address:AddressModel, RentAmount:double, RentFrequency:int32, RentAnnualAmount:double, RentalType:int32, PropertyValuation:int32, LookupDetails:PropertyWealthItemLookupDetails, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **PropertyMonthlyGrowthInfo**: Year:int32, MonthIndex:int32, Month:string, LGAValue:double, LocalityValue:double, Date:date-time
- **PropertyValuationInfo**: Low:double, High:double
- **PropertyWealthItemDetails**: Address:Address, PropertyRentAmount:double, PropertyRentFrequency:int32, PropertyRentAnnualAmount:double, LookupDetails:PropertyWealthItemLookupDetails, RentalType:int32, PropertyValuation:int32
- **PropertyWealthItemLookupDetails**: EstimatedCurrentValue:double, EstimatedCurrentValuePercentageGain:string, PropertyId:string, BathRoomCount:int32, BedRoomCount:int32, CarSpacesCount:int32, YearBuilt:string, PropertyTypeCode:string, ZoneDescription:string, YearlyMedianPrices:array<PropertyYearlyGrowthInfo>, MonthlyMedianPrices:array<PropertyMonthlyGrowthInfo>, TransferDate:date-time, TransferPrice:int32, PropertyValuationInfo:PropertyValuationInfo, SuburbMedianPrice:double, NextAutomaticValuationDate:date-time, HomeType:int32
- **PropertyYearlyGrowthInfo**: Year:int32, LGAValue:double, LocalityValue:double, LGAValueCount:int32, LocalityValueCount:int32
- **ProtectionItemOwner**: ID:int32, OwnerName:string, OwnerId:int32, FractionOwned:float, ExternalId:string
- **Questionnaire**: Title:string, Value:int32, IsSelected:boolean, Answer:string
- **ReactivateUserRequest**: Email:string
- **RegionSettings**: Name:string, EnumCulture:int32
- **RegisterViewModel**: Name:string, Email:string, Password:string, Postcode:string, CobrandToken:string, AccountantName:string, TelephoneMobile:string
- **RejectPermissionRequestViewModel**: PermissionRequestID:int32
- **RejectRoomCobrandInvitationViewModel**: RoomCobrandInvitationID:int32
- **RejectRoomInvitationViewModel**: RoomInvitationID:int32
- **RenameRoomViewModel**: RoomID:int32, Name:string, Description:string
- **ReportClientExportIntegrationActionFailureViewModel**: IntegrationActionId:int32, Error:string
- **ReportClientImportIntegrationActionFailureViewModel**: IntegrationActionId:int32, Error:string
- **RequestPermissionViewModel**: PermissionType:int32
- **ResetPasswordModel**: EmailAddress:string
- **RetirementIncome**: ID:int32, RetirementType:int32, PaymentFrequency:int32, CurrentValue:double, CreateDate:date-time, LastUpdated:date-time, Provider:string, PensionBalance:double, Taxable:double, CentrelinkDeductibleAmount:double, IsTransitionToRetirement:boolean, Beneficiaries:array<Member>, BeneficiaryType:int32, ProportionOfFund:string, MemberNo:string, TaxFreeAmount:double, Owners:array<ItemOwner>
- **Room**: ID:int32, CreateDate:date-time, LastUpdated:date-time, Name:string, Description:string, RoomType:RoomTypeSummary, Status:int32, ChatChannelIdentifier:string, PreferenceOpportunity:PreferenceOpportunity, ClosureReason:int32, RoomRating:int32, Comments:string
- **RoomChatMessage**: TimeStamp:date-time, DateUpdated:date-time, From:string, Author:string, LastUpdatedBy:string, Attributes:object, Media:object, Body:string, Index:int32, Type:string
- **RoomCobrandInvitation**: ID:int32, Room:Room, Cobrand:Cobrand, IsInvitedByRoomOwner:boolean, CobrandInvitationStatus:int32
- **RoomInvitation**: ID:int32, Name:string, Description:string, InvitationStatus:int32, PreferenceOpportunity:PreferenceOpportunity, Room:RoomSummary, CreateDate:date-time, LastUpdated:date-time
- **RoomMember**: ID:int32, MemberProfile:RoomMemberProfileSummary, Entity:EntitySummary, Role:int32
- **RoomMemberProfileSummary**: ID:int32, AccountLogin:AccountLoginSummary, Mobile:string, ImageToken:string, ImageUrl:string, LastLoginDateTime:date-time, ChatMemberIdentifier:string
- **RoomMemberProfileSummaryWithChatToken**: ID:int32, AccountLogin:AccountLoginSummary, Mobile:string, ImageToken:string, ImageUrl:string, LastLoginDateTime:date-time, ChatMemberIdentifier:string, ChatAccessToken:string
- **RoomMoafInstanceSummary**: ID:int32, CreateDate:date-time, LastUpdated:date-time, MoafInstanceID:int32, FormFillStatus:int32, CompletedDate:date-time, Name:string, MoafType:int32, AssigneeName:string, AssigneeEmail:string, AssignerName:string, AssignerEmail:string
- **RoomPermissionRequest**: ID:int32, Room:Room, RoomMember:RoomMember, PermissionType:int32, RequestStatus:int32
- **RoomSummary**: ID:int32, Name:string, CreateDate:date-time, LastUpdated:date-time, Description:string, RoomType:RoomTypeSummary, Status:int32, ChatChannelIdentifier:string
- **RoomSummaryModel**: ID:int32, Name:string, CreateDate:date-time, LastUpdated:date-time, Description:string, RoomType:RoomTypeSummaryModel, Status:int32, ChatChannelIdentifier:string, Workspace:Workspace
- **RoomTask**: ID:int32, SourceID:int32, DisplayName:string, CreatorName:string, CreatedDate:date-time, LastUpdated:date-time, Achieved:date-time, Due:date-time, OnHold:boolean, Status:string, Type:int32, IsReadOnly:boolean, Assignees:array<RoomTaskAssignee>
- **RoomTaskAssignee**: ID:int32, AssigneeAccountLoginGuid:string, AssigneeName:string, Due:date-time, OnHold:boolean, Achieved:date-time, Completed:boolean
- **RoomTypeSummary**: Id:int32, Name:string, Description:string, MobileIcon:string, DesktopIcon:string
- **RoomTypeSummaryModel**: Id:int32, Name:string, DisplayName:string, Description:string, MobileIcon:string, DesktopIcon:string
- **SaveDocumentsSynchronisationStatusForAccountViewModel**: AccountGuid:string, DocumentSyncStatuses:array<IntegrationDocumentSyncStatusViewModel>
- **SaveIntegrationActionStatusForClientExportViewModel**: IntegrationActionId:int32, ClientExportStatuses:array<IntegrationClientExportStatusViewModel>
- **SavingsGoalCalculation**: SavingsGoalInput:SavingsGoalInput, SavingsGoalOutput:SavingsGoalOutput
- **SavingsGoalInput**: ID:int64, Timestamp:date-time, RegularAmount:double, DepositFrequency:int32, InterestRate:double, InterestFrequency:int32, DurationMonths:double, StartDate:date-time, BankAccount:WealthItemSummary, TargetAmount:double, CalculationTarget:int32
- **SavingsGoalOutput**: ID:int64, Timestamp:date-time, StartAmount:double, RegularAmount:double, DepositFrequency:int32, InterestRate:double, InterestFrequency:int32, DurationMonths:double, StartDate:date-time, BankAccount:WealthItemSummary, TargetAmount:double, CalculationTarget:int32, Projections:array<SavingsGoalProjection>, ProgressPoints:array<GoalProgressPoint>, ProgressPercent:double
- **SavingsGoalProjection**: Date:date-time, Term:int32, OpeningBalance:double, RegularAmount:double, InterestAmount:double, PrincipalAmount:double, ClosingBalance:double
- **SectionPermission**: Name:string, List:boolean, View:boolean, Write:boolean, Delete:boolean, Full:boolean, Read:boolean, ListDescription:string, ViewDescription:string, WriteDescription:string, DeleteDescription:string
- **SecuritySummary**: IsMfaEnabled:boolean, IsMfaForcedEnabled:boolean, RecoveryEmail:string, Questionnaires:array<Questionnaire>
- **ServiceSummary**: ID:int32, NameToUse:string, RoomType:RoomTypeSummary, OfferingType:int32
- **ShadowIntegratedItem[InsuranceCover]**: ID:int32, IntegratedItem:IntegratedItem[InsuranceCover], ClientAccountId:int32, IntegrationType:int32, ShadowItemType:int32, ItemType:string, CreatedOn:date-time, UpdatedOn:date-time, ReviewStatus:int32, ReviewedByAccountLoginId:int32
- **SharesModel**: ListedShareNumberOfShares:int32, ListedShareAverageUnitCostPerShare:double, ManualASXName:string, ListedCompany:AsxListedCompany, UseASXFeed:boolean, ListedShareASXCode:string, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **SharesWealthItemDetails**: UseASXFeed:boolean, ListedShareNumberOfShares:int32, ListedShareAverageUnitCostPerShare:double, ListedShareASXCode:string, ManualASXName:string, ListedCompany:AsxListedCompany
- **SignRecipient**: ID:int32, Name:string, Email:string, SigningStatus:int32, IsOwner:boolean, IsAccountOwner:boolean, RequestedDate:date-time, CompletedDate:date-time, SignToken:string
- **Snapshot**: ID:int32, NetWorth:double, Period:date-time, DateTaken:date-time
- **State**: CountryId:int32, Id:int32, Name:string, Description:string
- **SvixPublishEventModel**: EventId:string, EventType:int32, Brands:array<string>, CobrandNetworks:array<string>, Cobrands:array<string>, Payload:object
- **Task**: ID:int32, Name:string, Description:string, Status:int32, DisplayStatus:int32, CreatedOn:date-time, DueDate:date-time, ReminderFrequency:int32, ReminderStartDate:date-time, ActionedOn:date-time, Notes:string, TaskAssignee:TaskUser, TaskCreator:TaskUser, Trigger:TaskTrigger, TaskActionType:int32, IsDraft:boolean
- **TaskTrigger**: Type:int32, SourceId:int32, Action:int32, Meta:string
- **TaskUser**: ID:int32, Name:string
- **TaxPartnerAgent**: ID:int32, Name:string, Logo:string, LogoUrl:string, TelephoneWork:string, TelephoneMobile:string, Email:string, About:string, Relationship:int32, Cobrand:Cobrand, Branch:TaxPartnerBranch, AccountLogin:AccountLoginSummary
- **TaxPartnerAgentToInviteToRoom**: IsRecommended:boolean, ID:int32, Name:string, Logo:string, LogoUrl:string, TelephoneWork:string, TelephoneMobile:string, Email:string, About:string, Relationship:int32, Cobrand:Cobrand, Branch:TaxPartnerBranch, AccountLogin:AccountLoginSummary
- **TaxPartnerBranch**: ID:int32, PhoneNumber:string, EmailAddress:string, Title:string, WebsiteUrl:string, DetailedAddress:DetailedAddress, About:string
- **TeamMember**: ID:int32, EntityType:int32, Company:CompanyInfo, User:UserInfo, Relationship:int32, RelationshipDescription:string, Logo:string, DisplayName:string, IsOwner:boolean, AddressText:string, Address:AddressModelV1, IsActive:boolean, IsStaff:boolean, IsExternalStaff:boolean
- **Todo**: ID:int32, Name:string, Description:string, ToDoReminder:int32, Parent:PlanTodoParent, TodoPreset:TodoPreset, AssignedEntity:EntitySummary, Account:Account, Owners:array<PlanToDoOwner>, Due:date-time, OnHold:boolean, ReminderStartDate:date-time, Achieved:date-time, Created:date-time, LastReviewed:date-time, DisplayStatus:int32, Status:int32, IsRecurring:boolean, NextDue:date-time, TodoTrigger:TodoTrigger, Notes:string
- **TodoPreset**: Id:int32, Name:string, Description:string, GroupName:string, LocalizedDescription:string, IsDefault:boolean
- **TodoSummary**: ID:int32, Name:string, Description:string, DisplayStatus:int32, Due:date-time, OnHold:boolean, AssignedEntity:EntitySummary, Parent:PlanTodoParent, Achieved:date-time
- **TodoTrigger**: Url:string, TriggerType:int32, TriggerAction:int32, ID:int32
- **TransactionCategory**: Id:int32, YodleeTransactionCategory:int32, CustomTransactionCategory:CustomTransactionCategory, TransactionSource:int32, Description:string, UniqueId:string, TransactionType:int32, TransactionCategoryGroup:TransactionCategoryGroup
- **TransactionCategoryGroup**: ID:int32, TransactionType:int32, Description:string, IsDefaultGroup:boolean
- **UpdateBillingAddressModel**: CobrandUniquieId:string, CompanyName:string, CompanyContact:string, Address1:string, Address2:string, Suburb:string, State:string, PostCode:string, Country:string
- **UpdateEmailModel**: Email:string, Password:string
- **UpdatePasswordModel**: OldPassword:string, NewPassword:string
- **UpdatePrivateInfoModel**: DisplayName:string
- **UserInfo**: Email:string, AlternativeEmail:string, DOB:date-time, PreferredPhone:string, GuestAccessEnabled:boolean, IsPrimary:boolean, Title:int32, Gender:int32, PhoneWork:string, PhoneHome:string, PhoneMobile:string, PreferredContactMethod:int32, CanConvert:boolean, CanMakePrimary:boolean, IsInRoomPrimaryProfessional:boolean
- **VehicleModel**: RegistrationNumber:string, Transmission:string, Manufacturer:string, YearOfManufacture:int32, BodyShape:string, Model:string, LookupDetails:VehicleWealthItemLookupDetails, ID:int32, Name:string, Value:double, ReferenceNote:string, ValuationDate:date-time, ValuationPrice:double, Created:date-time, LastUpdated:date-time, ImageUrl:string, LifestyleOrInvestment:int32, Category:NetWorthCategoryModel, Owners:array<NetWorthOnwerModel>
- **VehicleWealthItemDetails**: MotorVehicleRegistrationNumber:string, MotorVehicleTransmission:string, MotorVehicleManufacturer:string, MotorVehicleYearOfManufacture:int32, MotorVehicleBodyShape:string, MotorVehicleModel:string, LookupDetails:VehicleWealthItemLookupDetails
- **VehicleWealthItemLookupDetails**: VehicleKey:string, MakeCode:string, FamilyCode:string, MakeDescription:string, FamilyDescription:string, VehicleType:int32, Year:int32, Month:int32, RBC:string, RBID:string, BodyStyle:string, Description:string, ImportFlag:string, AvgWhs:int64, AvgRetail:int64, GoodWhs:int64, GoodRetail:int64, NewPrice:int64, PrivateMin:int64, PrivateMax:int64, TradeInMin:int64, TradeInMax:int64, IsLimited:boolean, Series:string, SeriesModelYear:int64, Badge:string, BodyConfig:string, WheelBaseConfig:string, RoofLine:string, ExtraInfo:string, Drive:string, GearType:string, GearLocation:string, GearNumbers:int64, DoorNumbers:int64, EngineSize:int64, EngineDescription:string, Cylinders:int64, FuelType:string, Induction:string, AvgKM:string, GoodKM:string, AncapRating:string, GreenStarRating:string, FuelUrban:string, FuelExtraUrban:string, FuelCombined:string
- **WealthAndCashflowSettings**: IncludeTransfers:boolean, ShowHiddenTransactions:boolean, ShowDuplicatedTransactions:boolean, ShowTransfersToLoanAccounts:boolean, ShowHiddenWealthItems:boolean, ShowHiddenInsuranceItems:boolean, ShowNotInTeam:boolean, IsReadyToClose:boolean, IncludeLoanTransactionsInCashflow:boolean, ShowOnlyCategoriesWithTransactions:boolean, LockSettings:boolean, ShowNotificationsSetting:boolean, DisablePreferenceSetting:boolean
- **WealthItem**: ID:int32, Name:string, Value:double, Category:WealthItemCategory, ComputedValueWithSign:double, ComputedValueWithSignForOwners:double, ImageToken:string, ImageUrl:string, Owners:array<WealthItemOwner>, Created:date-time, ValuationDate:date-time, ValuationPrice:double, PurchaseDate:date-time, PurchaseValue:double, ProjectedGrowthRate:float, ProjectedIncomeRate:float, ReferenceNote:string, ReportingCategory:int32, LastReviewed:date-time, LifestyleOrInvestment:int32, PropertyWealthItemDetails:PropertyWealthItemDetails, VehicleWealthItemDetails:VehicleWealthItemDetails, FinancialAccountWealthItemDetails:FinancialAccountWealthItemDetails, SharesWealthItemDetails:SharesWealthItemDetails, BusinessWealthItemDetails:BusinessWealthItemDetails, LinkedLoanAccountIds:array<int32>, IsHidden:boolean, DataFeedSource:string
- **WealthItemCategory**: IsAssetWealthItem:boolean, Id:int32, Name:string, Description:string
- **WealthItemHistory**: ID:int64, WealthItem_ID:int32, Date:date-time, Value:double
- **WealthItemOwner**: OwnerName:string, OwnedValue:double, OwnerId:int32, FractionOwned:float, ExternalId:string, IsCreator:boolean
- **WealthItemOwnerSummary**: EntityId:int32, OwnerName:string, OwnedValue:double, FractionOwned:float
- **WealthItemSummary**: ID:int32, Name:string, Value:double, Category:WealthItemCategory, ComputedValueWithSign:double, ComputedValueWithSignForOwners:double, ImageToken:string, ImageUrl:string, Owners:array<WealthItemOwnerSummary>
- **WealthSettingsModel**: ShowHiddenWealthItems:boolean, ShowNotInTeam:boolean
- **WealthSummary**: NetWorth:double, WealthItems:array<WealthItemSummary>
- **Will**: ID:int32, LastReviewed:date-time, Created:date-time, Name:string, Owners:array<ProtectionItemOwner>, OriginalDocumentDate:date-time, Firm:string, AddressUnitNo:string, AddressStreet1:string, AddressStreet2:string, AddressSuburb:string, AddressState:int32, AddressPostcode:string, PersonTitle:int32, FirstName:string, MiddleName:string, LastName:string, TelephoneHome:string, TelephoneWork:string, TelephoneMobile:string, Email:string, ReferenceNote:string
- **WillSummary**: ID:int32, Name:string, Owners:array<ProtectionItemOwner>
- **Workspace**: WorkspaceName:string, AccountId:int32, GroupId:int32, AccountGuid:string, IsCurrent:boolean, ClientImageToken:string, OwnerEmailAddress:string, ClientDisplayName:string, IsMine:boolean, IsInvalid:boolean, EntityType:int32, Token:string, ProfileImage:string, Header:string, Logo:string, Icon:string, Bookmark:string, BrandingId:string, AccountType:int32, Culture:int32, IsWhiteHeader:boolean, IsRoomEnabled:boolean, FirmName:string
- **WorkspaceInfo**: IsWhiteHeader:boolean, Logo:string, Bookmark:string, FirmName:string, IsRoomEnabled:boolean, Culture:int32
- **ZipFolderAndDocument**: FolderIds:array<int32>, Ids:array<int32>, Type:int32