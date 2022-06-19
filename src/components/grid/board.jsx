import styled from "styled-components";

export const Board = styled.div`
    display: grid;
    border: 3px solid rgb(60, 65, 231);
    grid-template-columns: repeat(${props => `${props.cssRepeat}`}, 30px);
  `;