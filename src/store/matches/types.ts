import { Profile } from '~/store/profile';

export type MatchUser = Pick<Profile, 'id' | 'avatar' | 'firstName' | 'lastName'>;

export type Match = {
    date: Date;
    id: number;
    initiator: MatchUser;
    reciever: MatchUser;
    status: string;
};

export type CreateMatchPayload = Pick<Match, 'initiator' | 'reciever'>;

export type MatchesState = {
    doUpdateIncoming: boolean;
    doUpdateOutgoing: boolean;
    incoming?: Match[];
    outgoing?: Match[];
};
