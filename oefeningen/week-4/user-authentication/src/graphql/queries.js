import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
    query GET_ALL_TODOS {
        todos {
        id
        title
        description
        isCompleted
        }
    }  
`
