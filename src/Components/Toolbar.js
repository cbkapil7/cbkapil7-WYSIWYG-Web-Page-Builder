import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

export default function Toolbar({ onAddComponent }) {
  const components = [
    { label: 'Text', type: 'text' },
    { label: 'Image', type: 'image' },
    { label: 'Button', type: 'button' },
  ];

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <Stack direction="row" spacing={4}>
        {components.map((component) => (
          <Button
            key={component.type}
            onClick={() => onAddComponent(component.type)}
            colorScheme="blue" 
            variant="solid" 
            size="sm" 
            _hover={{ bg: "blue.200" }} 
            _active={{ bg: "blue.300" }} 
            _focus={{ boxShadow: "outline" }} 
          >
            {component.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
