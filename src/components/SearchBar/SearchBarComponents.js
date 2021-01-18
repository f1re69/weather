import styled from 'styled-components';

export const  Container = styled.div`
  width: 13rem;
  /*flex-basis: 2rem;*/
  margin-bottom: 2rem;
  background: white;
  border: 1px solid gray;
  border-radius: 30px;
  & form {
      padding: 0 12px;
      height: 3rem;
      display: flex;
      align-items: center;
      & input {
          flex: 1 1 auto;
          border: none;
          text-align: center;
          border-radius: 30px;
          height: 100%;
          outline: none;

          &[type='text'] {
            font-size: 16px;
            font-family: lato;
          }
      }
  }
`;