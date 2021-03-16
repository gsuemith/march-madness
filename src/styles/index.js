import styled from 'styled-components'

export const SelectChar = styled.div`
  margin: 3px 0;
  box-shadow: 1px 1px 1px black;
  width: 95%;
  height: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  color: #999;
  background-color: #333;
  background-color: ${props => props.bgColor};
  transition: .3s ease-in;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 3px black;
    background-color: white;
    color: black;
  }
  .seed {
    color: black;
    width: 2.5em;
    padding: 1em 0 0 .5em;
    background-color: green;  //default
    background-color: ${({ winner, role }) => {
      if(winner){
        return winner === role ? 'gold' : 'red'
      } else {return 'none'}
      }};
    height: 100%;
  }
`

export const Name = styled.span`
  margin-left: .5em;
  text-decoration: ${({ loser }) => loser ?'line-through':'none'};
  font-size: smaller;
`

export const Card = styled.div`
  display: inline-block;
  width: 160px;
  height: 300px;
  background-image: linear-gradient(to right bottom, white 20%, pink 40%, lightblue);
  box-shadow: 2px 2px 2px black;
  margin: .5em;
  padding-left: 1em;
  :hover {
    box-shadow: 4px 4px 4px black;
  }
`
export const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  padding-right: 1em;

  :nth-child(2) {
    color: red;
  }
  span {
    cursor: pointer;
  }
`