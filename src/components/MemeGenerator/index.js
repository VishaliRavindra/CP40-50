import {Component} from 'react'
import {
  MemeContainer,
  MainContainer,
  InputsContainer,
  InputContainer,
  LoginButton,
  InputLabel,
  InputFiled,
  FormContainer,
  ImageDisplay,
  ImageNotDisplay,
  TopText,
  BottomText,
  FontDropDown,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageurl: '',
    toptext: '',
    bottomtext: '',
    isGenerated: false,
    fontdropdown: fontSizesOptionsList[0],
  }

  onChangeImageUrl = event => {
    this.setState({imageurl: event.target.value})
  }

  onChangeToptext = event => {
    this.setState({toptext: event.target.value})
  }

  onChangeBottomtext = event => {
    this.setState({bottomtext: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({fontdropdown: event.target.value})
  }

  renderImageUrlField = () => {
    const {imageurl} = this.state
    return (
      <>
        <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
        <InputFiled
          type="text"
          id="imageUrl"
          placeholder="Enter the Image Url"
          value={imageurl}
          onChange={this.onChangeImageUrl}
        />
      </>
    )
  }

  renderTopTextField = () => {
    const {toptext} = this.state
    return (
      <>
        <InputLabel htmlFor="topText">Top Text</InputLabel>
        <InputFiled
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          value={toptext}
          onChange={this.onChangeToptext}
        />
      </>
    )
  }

  renderBottomTextField = () => {
    const {bottomtext} = this.state
    return (
      <>
        <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
        <InputFiled
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          value={bottomtext}
          onChange={this.onChangeBottomtext}
        />
      </>
    )
  }

  renderSelectTextField = () => {
    const {fontdropdown} = this.state
    return (
      <>
        <InputLabel htmlFor="dropdown">Font Size</InputLabel>
        <FontDropDown
          id="dropdown"
          value={fontdropdown}
          onChange={this.onChangeSelect}
        >
          {fontSizesOptionsList.map(eachOption => (
            <option key={eachOption.optionId} value={eachOption.displayText}>
              {eachOption.displayText}
            </option>
          ))}
        </FontDropDown>
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {imageurl, toptext, bottomtext, isGenerated} = this.state
    this.setState({isGenerated: true})
  }

  render() {
    const {
      isGenerated,
      imageurl,
      toptext,
      bottomtext,
      fontdropdown,
    } = this.state
    const txt = parseInt(fontdropdown)
    return (
      <MainContainer>
        <MemeContainer>
          <InputsContainer>
            <h1>Meme Generator</h1>
            <FormContainer onSubmit={this.onSubmitForm}>
              <InputContainer>{this.renderImageUrlField()}</InputContainer>
              <InputContainer>{this.renderTopTextField()}</InputContainer>
              <InputContainer>{this.renderBottomTextField()}</InputContainer>
              <InputContainer>{this.renderSelectTextField()}</InputContainer>
              <LoginButton type="submit">Generate</LoginButton>
            </FormContainer>
          </InputsContainer>
          {isGenerated ? (
            <ImageDisplay im={imageurl} data-testid="meme">
              <TopText tx={txt}>{toptext}</TopText>
              <BottomText tx={txt}>{bottomtext}</BottomText>
            </ImageDisplay>
          ) : (
            <ImageNotDisplay>
              <h2>Hello</h2>
            </ImageNotDisplay>
          )}
        </MemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
