import styled from 'styled-components'



export const Button = styled.button`
 all:unset;
 border: 2px solid;
 border-color: ${props => props.$borderColor || "black"};
 background-color: ${props => props.$background || "white"};
 color: ${props => props.color || "black"};
 font-size: 16px;
 padding: 5px 15px;
 &:focus{

 }
`

export const TomatoButton = styled(Button)`
font-size: 25px;
padding: 10px 20px
`