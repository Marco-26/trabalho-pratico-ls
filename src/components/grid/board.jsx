import styled from "styled-components";

export const Board = styled.div`
    display: grid;
    border: 1px solid ;
    grid-template-columns: repeat(${props => `${props.cssRepeat}`}, 30px);
  `;