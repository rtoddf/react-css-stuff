import styled from 'styled-components';

export const StyledImage = styled.div`
  .container {
    position: absolute;
    width: auto;
    height: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #222;
    transition: all 0.3s ease;

    figure {
      height: 100%;

      img {
        width: 102%;
        height: 102%;
        max-width: 102%;
        max-height: 102%;
        object-fit: cover;
        cursor: pointer;
        transition: all 0.6s ease;

        &:hover {
          width: 110%;
          height: 110%;
          max-width: 110%;
          max-height: 110%;
          margin: -5%;
        }
      }
    }
  }
`;

export const StyledContentHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: ${({ theme }) => theme.grays.white};

  h4 {
    margin-bottom: 0;
    font-weight: normal;
  }

  a {
    color: ${({ theme }) => theme.grays.white};
    font-weight: 400;
  }
`;

export const StyledSquare = styled.article`
  position: relative;

  &:after {
    content: '';
    float: left;
    display: block;
    padding-top: 100%;
  }
`;

/* &.expanded {
        height: 110%;
        width: 180%;

        -webkit-transform: scale(1.5);
        transform: scale(1.5) translateX(-10%);

        border: 1px solid ${({ theme }) => theme.grays.white};
        z-index: 10;

        .image-holder img,
        figure img {
          width: auto;

          &:hover {
            width: auto;
            height: 102%;
            max-width: 102%;
            max-height: 102%;
          }
        }
      }

      &.expanded-square {
        transform: scale(1.5);
        border: 1px solid ${({ theme }) => theme.grays.white};
        z-index: 10;
      } */
// .fading-images {
//   [data-image-layout='square'] {
//     figure {
//       img {
//         transition: none;
//         cursor: auto;

//         &:hover {
//           width: 102%;
//           height: 102%;
//           max-width: 102%;
//           max-height: 102%;
//           margin: 0;
//         }
//       }
//     }
//   }
// }
