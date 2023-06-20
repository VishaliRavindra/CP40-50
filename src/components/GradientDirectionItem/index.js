import {ListItem, Btn, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, clickBtnItem, isActive} = props
  const {value, displayText} = details

  const onClickBtn = () => {
    clickBtnItem(value)
  }

  return (
    <ListItem>
      {isActive ? (
        <Button type="button">{displayText}</Button>
      ) : (
        <Btn onClick={onClickBtn}>{displayText}</Btn>
      )}
    </ListItem>
  )
}

export default GradientDirectionItem
