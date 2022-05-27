import styled from "styled-components";

export const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => `${props.cssRepeat}`}, 30px);
  `;