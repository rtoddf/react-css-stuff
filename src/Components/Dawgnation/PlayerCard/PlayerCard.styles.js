import styled from 'styled-components';

export const StyledPlayerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.bodyTextColor};
  border-radius: 10px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.dawgNationRed} 0%,
    ${({ theme }) => theme.grays.black} 80%
  );

  .socialContent {
    text-align: center;
    /* display: flex;
    flex-direction: column; */

    a {
      /* display: block; */
      /* border: 1px solid orange; */
    }
  }

  @media (max-width: 600px) {
    .content {
      display: flex;
      flex-direction: row;
      align-items: center;

      .stuff {
        width: 100%;
      }
    }
  }
`;
