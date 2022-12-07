const createYourPassword = () => {
  const [password, setPassword] = useState('')

  const createYourPassword = event => {
    setPassword(event.target.value)
    setValidLength(password.length >= 8)
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
        <TextElement>{text}</TextElement>
      </CardContainer>
    </AppContainer>
  )
}
