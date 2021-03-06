import styled from 'styled-components';

  export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;


    & > img {
      transition: transform .5s;
    }
    
    &:hover {
      & > img {
        transform: scale(1.3);
      }
    }

  `;
