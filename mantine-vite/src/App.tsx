import { MantineProvider } from '@mantine/core'
import { DemoPage } from './Demo.tsx'

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <DemoPage />
    </MantineProvider>
  )
}
