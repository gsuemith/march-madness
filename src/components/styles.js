import styled from 'styled-components';

export const Card = styled.div`
  display: inline-block;
  width: 160px;
  height: 300px;
  background-image: linear-gradient(to right bottom, white 20%, pink 40%, lightblue);
  box-shadow: 2px 2px 2px gray;
  margin: .5em;
  padding-left: 1em;
  :hover {
    box-shadow: 4px 4px 4px gray;
  }
`