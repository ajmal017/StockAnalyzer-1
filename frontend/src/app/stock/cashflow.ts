export interface Cashflow {
    cashflowId?: number,
    stockId?: number,
    cashOperations?: number,
    depreciation?: number,
    capex?: number,
    cashInvesting?: number,
    cashFree?: number,
    issuanceOfStock?: number,
    issuanceOfDdebt?: number,
    cashFinancing?: number,
    startCash?: number,
    endCash?: number,
    modifiedAt?: string
}
