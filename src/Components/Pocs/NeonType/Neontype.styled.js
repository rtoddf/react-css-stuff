import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${({ color }) => color.color};
  color: ${({ theme }) => theme.grays.white};
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const StyledNeonType = styled.div`
  display: inline-block;
  margin: 3.75rem;
  padding: 1.25rem 2.5rem;
  background-color: ${({ theme }) => theme.grays.three};
  border: 10px double ${({ color }) => color};
  border-radius: 20px;
  animation: neon-box 1.5s ease-in-out infinite alternate;
  text-align: center;

  p {
    margin-bottom: 0;
    padding: 2.5rem;
    color: ${({ color }) => color};
    font-family: Audiowide;
    font-size: 7em;
    text-transform: uppercase;
    letter-spacing: 2rem;
    animation: neon-text 1.5s ease-in-out infinite alternate;
  }

  button {
    padding: 10px;
  }

  @keyframes neon-text {
    0% {
      text-shadow: 0 0 10px ${({ theme }) => theme.grays.white},
        0 0 20px ${({ theme }) => theme.grays.white},
        0 0 30px ${({ theme }) => theme.grays.white},
        0 0 40px ${({ color }) => color}, 0 0 70px ${({ color }) => color},
        0 0 80px ${({ color }) => color}, 0 0 100px ${({ color }) => color},
        0 0 150px ${({ color }) => color};
    }
    100% {
      text-shadow: 0 0 5px ${({ theme }) => theme.grays.white},
        0 0 10px ${({ theme }) => theme.grays.white},
        0 0 15px ${({ theme }) => theme.grays.white},
        0 0 20px ${({ color }) => color}, 0 0 35px ${({ color }) => color},
        0 0 40px ${({ color }) => color}, 0 0 50px ${({ color }) => color},
        0 0 75px ${({ color }) => color};
    }
  }

  @keyframes neon-box {
    0% {
      box-shadow: 0 0 10px ${({ theme }) => theme.grays.white},
        0 0 20px ${({ theme }) => theme.grays.white},
        0 0 30px ${({ theme }) => theme.grays.white},
        0 0 40px ${({ color }) => color}, 0 0 70px ${({ color }) => color},
        0 0 80px ${({ color }) => color}, 0 0 100px ${({ color }) => color},
        0 0 150px ${({ color }) => color};
    }
    100% {
      box-shadow: 0 0 5px ${({ theme }) => theme.grays.white},
        0 0 10px ${({ theme }) => theme.grays.white},
        0 0 15px ${({ theme }) => theme.grays.white},
        0 0 20px ${({ color }) => color}, 0 0 35px ${({ color }) => color},
        0 0 40px ${({ color }) => color}, 0 0 50px ${({ color }) => color},
        0 0 75px ${({ color }) => color};
    }
  }
`;
