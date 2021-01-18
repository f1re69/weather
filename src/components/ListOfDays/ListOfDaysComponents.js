import styled from 'styled-components';

export const Button = styled.button`
      padding: 1rem;
      background-color: #00000087;
      border-color: #0006;
      border-radius: 4px;
      margin: 1em 2px;
      color: white;
      &.active {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            transform: scale(1.1);
            outline: none;
            margin: 1em 5px;
        }
  `;

export const Container = styled.div`
        text-align: center;
        @media screen and (max-width: 450px) {
            display: inline-flex;
            width: 95%;
            overflow-x: auto;
            position: relative;
        }
  `;