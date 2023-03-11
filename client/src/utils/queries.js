import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
        {
            user {
                firstName
                lastName
                nickname
            }
        }
`;