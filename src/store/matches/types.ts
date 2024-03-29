import { Profile } from '~/store/profile';

export type MatchUser = Pick<Profile, 'id' | 'avatar' | 'firstName' | 'lastName'>;

export type Match = {
    date: string;
    id: number;
    initiator: MatchUser;
    reciever: MatchUser;
    status: string;
};

export type CreateMatchPayload = {
    initiator: number;
    reciever: number;
};

export type MatchesState = {
    doUpdateIncoming: boolean;
    doUpdateOutgoing: boolean;
    incoming?: Match[];
    outgoing?: Match[];
};
