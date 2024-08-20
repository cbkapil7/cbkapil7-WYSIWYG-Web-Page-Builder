// TextToolbar.js
import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

export default function TextToolbar({ onStyleChange }) {
  return (
    <Stack direction="row" spacing={4} mb={4}>
      <Button onClick={() => onStyleChange('bold')}>Bold</Button>
      <Button onClick={() => onStyleChange('italic')}>Italic</Button>
      <Button onClick={() => onStyleChange('increaseFontSize')}>Increase Font Size</Button>
      <Button onClick={() => onStyleChange('decreaseFontSize')}>Decrease Font Size</Button>
    </Stack>
  );
}
