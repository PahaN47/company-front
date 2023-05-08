export type Match = {
    date: Date;
    id: number;
    initiator: number;
    reciever: number;
    status: string;
};

export type CreateMatchPayload = Pick<Match, 'initiator' | 'reciever'>;

export type MatchesState = {
    doUpdateIncoming: boolean;
    doUpdateOutgoing: boolean;
    incoming?: Match[];
    outgoing?: Match[];
};
