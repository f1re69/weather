import styled from 'styled-components';

export const  Container = styled.div`
  width: 13rem;
  flex-basis: 2rem;
  margin-bottom: 2rem;
  background: white;
  border: 1px solid gray;
  border-radius: 20px;
  & form {
      padding: 0 12px;
      height: 100%;
      display: flex;
      align-items: center;
      & input {
          flex: 1 1 auto;
          border: none;
      }
  }
`;