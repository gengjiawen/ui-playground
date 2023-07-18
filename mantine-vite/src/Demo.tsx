import { Group, Text, useMantineTheme, rem, Title } from '@mantine/core'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import { Dropzone, DropzoneProps } from '@mantine/dropzone'
import Papa from 'papaparse'
import { useState } from 'react'

export function DemoPage(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme()
  const [file, setFile] = useState('')
  const max_m = 10
  const maxFilesize  = max_m * 1024 ** 2
  return (
    <>
      <Dropzone
        maxFiles={1}
        onDrop={(files) => {
          console.log('accepted files', files)
          setFile(files[0]?.path ?? '')
          if (files[0]?.path?.endsWith('csv')) {
            Papa.parse(files[0], {
              complete: function (results) {
                console.log('Finished:', results.data)
              },
            })
          }
        }}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={maxFilesize}
        {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === 'dark' ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              size="3.2rem"
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text
              size="xl"
              inline
            >
              Drag files here or click to select files
            </Text>
            <Text
              size="sm"
              color="dimmed"
              inline
              mt={7}
            >
              Attach as many files as you like, each file should not exceed {max_m}mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Title>File: {file} </Title>
    </>
  )
}
