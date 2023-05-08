export type Balance = {
    amount: number;
    id: number;
};

export type PurchasePayload = {
    gift: number;
    reciever: number;
};

export type BalanceState = {
    doUpdateBalance: boolean;
    isPurchaseSuccessful: boolean;
    own?: Balance;
};
