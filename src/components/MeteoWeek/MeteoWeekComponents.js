import styled from 'styled-components'

export const ParentContainer = styled.div`
        position: relative;
        margin-top: 1em;
        @media screen and (max-width: 450px) {
            .childContainer {
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                overflow-x: auto;
                width: 100%;
            }
        }
    `;
        
export const Table = styled.table`
    border-collapse: collapse;
    & td {
        padding: 10px;
        text-align: center;
        background-color: #00000087;
        border-color: #0006;
        color: #fff;
    }
    & td:nth-child(2n+1) {
        background-color: #2d0505bd;
    }
`;