import React from 'react';
import { Box } from '@chakra-ui/react';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

export default function Canvas({ components }) {
  return (
    <Box
      flex="1"
      p={4}
      bg="blue.50" 
      border="1px solid"
      borderColor="blue.200" 
      borderRadius="md"
      minHeight="600px"
      display="flex"
      flexDirection="column"
      gap={4}
      overflow="auto"
    >
      {components.map((component) => {
        switch (component.type) {
          case 'text':
            return (
              <Box key={component.id} mb={4}>
                <TextComponent />
              </Box>
            );
          case 'button':
            return (
              <Box key={component.id} mb={4}>
                <ButtonComponent />
              </Box>
            );
          case 'image':
            return (
              <Box key={component.id} mb={4}>
                <ImageComponent />
              </Box>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
}