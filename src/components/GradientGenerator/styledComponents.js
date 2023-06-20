import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.dr},
    ${props => props.c1},
    ${props => props.c2}
  );
  height: 100vh;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #ededed;
  font-family: Roboto;
  font-weight: 500;
`
export const Para = styled.p`
  color: #ffffff79;
  text-align: center;
  font-family: Roboto;
  font-weight: 500;
`
export const ParaPick = styled.p`
  color: #ffffff79;
  text-align: center;
  font-family: Roboto;
  font-weight: 500;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

export const ColorSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Colorcontainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 0px;
`

export const Input = styled.input`
  width: 100px;
  height: 50px;
  border: 0px;
  margin-top: 10px;
`

export const Label = styled.p`
  text-align: center;
  color: #ffffff79;
  font-family: Roboto;
  font-weight: 500;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  width: 130px;
  height: 50px;
  margin-top: 15px;
  border-radius: 10px;
  border: 0px;
  background-color: #00c9b7;
`
