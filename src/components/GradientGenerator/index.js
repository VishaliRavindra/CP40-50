import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  ColorContainer,
  Heading,
  Para,
  ParaPick,
  ButtonsContainer,
  ColorSelectContainer,
  Colorcontainer,
  Input,
  Label,
  Button,
  ButtonContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    nc1: '#8ae323',
    nc2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    direct: gradientDirectionsList[0].value,
  }

  onChangeColor1 = event => {
    this.setState({nc1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({nc2: event.target.value})
  }

  onClickButton = () => {
    const {nc1, nc2, direct} = this.state
    this.setState({color1: nc1, color2: nc2, direction: direct})
  }

  clickBtnItem = value => {
    this.setState({direct: value})
  }

  render() {
    const {nc1, nc2, color1, color2, direction, direct} = this.state
    return (
      <MainContainer
        c1={color1}
        c2={color2}
        dr={direction}
        data-testid="gradientGenerator"
      >
        <ColorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <ButtonsContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                details={eachItem}
                clickBtnItem={this.clickBtnItem}
                isActive={direct === eachItem.value}
              />
            ))}
          </ButtonsContainer>
          <ParaPick>Pick The Colors</ParaPick>
          <ColorSelectContainer>
            <Colorcontainer>
              <Label>{nc1}</Label>
              <Input type="color" value={nc1} onChange={this.onChangeColor1} />
            </Colorcontainer>
            <Colorcontainer>
              <Label>{nc2}</Label>
              <Input type="color" value={nc2} onChange={this.onChangeColor2} />
            </Colorcontainer>
          </ColorSelectContainer>
          <ButtonContainer>
            <Button type="button" onClick={this.onClickButton}>
              Generate
            </Button>
          </ButtonContainer>
        </ColorContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
