import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Sidebar from './Components/SideBar';
import Canvas from './Components/Canvas';

export default function App() {
  const [components, setComponents] = useState([]);

  const addComponent = (type) => {
    setComponents([...components, { type, id: components.length + 1 }]);
  };

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar onAddComponent={addComponent} />
        <Canvas components={components} />
      </Flex>
    </ChakraProvider>
  );
}