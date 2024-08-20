import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Button } from '@chakra-ui/react';

export default function ButtonComponent() {
  const [buttonText, setButtonText] = useState('Click Me');
  const buttonRef = useRef(null);
  const selectionRef = useRef(null);

  const handleChange = (e) => {
    const selection = window.getSelection();
    selectionRef.current = selection;
    setButtonText(e.target.innerText);
  };

  useEffect(() => {
    const restoreSelection = () => {
      if (buttonRef.current && selectionRef.current) {
        const selection = selectionRef.current;
        const range = document.createRange();
        range.selectNodeContents(buttonRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };

    const timeoutId = setTimeout(restoreSelection, 0);
    return () => clearTimeout(timeoutId);
  }, [buttonText]);

  return (
    <Draggable>
      <Button
        ref={buttonRef}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleChange}
        size="sm"
        fontSize="sm"
        p={2}
        width="auto"
        height="auto"
        bg="blue.500"
        color="white"
        _hover={{ bg: 'blue.600' }}
        _active={{ bg: 'blue.700' }}
        borderRadius="md"
      >
        {buttonText}
      </Button>
    </Draggable>
  );
}
