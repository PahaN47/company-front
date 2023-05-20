import { Match } from '~/store/matches';

export type MatchType = 'incoming' | 'outgoing';

export type MatchItemProps = {
    match: Match;
    type: MatchType;
};
