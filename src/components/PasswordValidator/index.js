// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  InputContainer,
  Heading,
  Paragraph,
  TextElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const errorMessage = password.length < 8

  const createYourPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputContainer
          value={password}
          type="password"
          onChange={createYourPassword}
        />
        {errorMessage && (
          <TextElement>Your password must be at least 8 characters</TextElement>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
