import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #5a7184;
  border-radius: 4px;
  width: 70vw;
  height: 80vh;
  margin: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #35469c;
  margin: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  justify-content:center,
  align-items:center,
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 60%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const InputFiled = styled.input`
  font-size: 14px;
  height: 40px;
  width: 360px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
`
export const ImageDisplay = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-image: url('${props => props.im}');
  background-size: cover;
  justify-content: flex-start;
  height: 80%;
  width: 60%;
  padding: 10px;
`
export const ImageNotDisplay = styled.div`
  display: none;
`

export const TopText = styled.p`
  color: #ffffff;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  font-size: ${props => props.tx}px;
`

export const BottomText = styled.p`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 400px;
  font-size: ${props => props.tx}px;
`
export const FontDropDown = styled.select`
  font-size: 14px;
  color: #475569;
  font-weight: 500;
  line-height: 1.42;
  padding: 6px 12px 6px 4px;
  background-color: #ffffff;
  border: 1px solid #94a3b8;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`
