import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Draggable from 'react-draggable';

export default function Sidebar({ onAddComponent }) {
  const handleDragStop = (e, data, type) => {
    onAddComponent(type);
  };

  return (
    <Box width="250px" p={4} borderRight="1px solid #ddd">
      <Text mb={4}>Components</Text>
      <Draggable
        onStop={(e, data) => handleDragStop(e, data, 'text')}
      >
        <Button mb={4} w="full">
          Drag Text
        </Button>
      </Draggable>
      <Draggable
        onStop={(e, data) => handleDragStop(e, data, 'button')}
      >
        <Button mb={4} w="full">
          Drag Button
        </Button>
      </Draggable>
      <Draggable
        onStop={(e, data) => handleDragStop(e, data, 'image')}
      >
        <Button mb={4} w="full">
          Drag Image
        </Button>
      </Draggable>
    </Box>
  );
}
