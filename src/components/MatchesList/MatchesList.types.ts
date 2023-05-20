import { Match } from '~/store/matches';

export type MatchesListProps = {
    className?: string;
    incoming?: Match[];
    outgoing?: Match[];
};
