import { Switch, SegmentedControl, TextInput, NumberInput, Select } from '@mantine/core';

function PictureLayout() {
  return (
    <div style={{ maxWidth: 300, margin: 'auto' }}>
      <SegmentedControl
        data={[
          { label: 'MJ', value: 'mj' },
          { label: 'SD', value: 'sd' },
          { label: 'DALL-E', value: 'dall-e' },
        ]}
      />

      <SegmentedControl
        mt="md"
        data={[
          { label: 'FAST', value: 'fast' },
          { label: 'NORMAL', value: 'normal' },
        ]}
      />

      <Switch label="使用GUI设置参数" checked mt="md" />

      <SegmentedControl
        mt="md"
        data={[
          { label: '1:1', value: '1:1' },
          { label: '4:3', value: '4:3' },
          { label: '3:4', value: '3:4' },
          { label: '16:9', value: '16:9' },
          { label: '9:16', value: '9:16' },
        ]}
      />

      <Select
        label="模型选择"
        placeholder="Select one"
        data={['Midjourney', 'NijiJourney']}
        mt="md"
      />

      <TextInput label="版本" placeholder="v6" mt="md" />
      <TextInput label="质量" placeholder="高品质" mt="md" />
      
      <NumberInput
        label="温度"
        defaultValue={0}
        mt="md"
      />

      <NumberInput
        label="风格化"
        defaultValue={100}
        mt="md"
      />
    </div>
  );
}

export default PictureLayout;
