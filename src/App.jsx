import './App.css'
import '@radix-ui/themes/styles.css';
import { Box, Button, Flex, Strong, Text, Theme, Avatar } from '@radix-ui/themes';

function App() {

  return (
    <Theme
      accentColor="bronze"
      grayColor="sand"
      radius="full"
      panelBackground="translucent"
      scaling="100%">
      <Flex direction="column" gap="2" align="center" justify="center">
        <Avatar
        
          size="5"
          fallback="z"
          variant="solid"
          color="cyan"
          radius="large"
        />
        <Text size="4" mb="2">hello <Strong>radix-ui</Strong>, from zam 👋🏻!</Text>
        <Button
          variant="surface"
          onClick={() => window.open("//github.com/zsbahtiar", "_blank")}
        >
          touch me!
        </Button>


      </Flex>

    </Theme>
  )
}

export default App
