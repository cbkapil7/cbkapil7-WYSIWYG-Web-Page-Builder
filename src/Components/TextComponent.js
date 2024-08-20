import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function TextComponent() {
  const [text, setText] = useState('Editable Text');
  const textRef = useRef(null);
  const selectionRef = useRef(null);

  const handleChange = (e) => {
    const selection = window.getSelection();
    selectionRef.current = selection;
    setText(e.target.innerText);
  };

  useEffect(() => {
    const restoreSelection = () => {
      if (textRef.current && selectionRef.current) {
        const selection = selectionRef.current;
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };

    const timeoutId = setTimeout(restoreSelection, 0);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <Draggable>
      <div
        ref={textRef}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleChange}
        style={{
          padding: '4px',
          border: '1px solid',
          borderRadius: '4px',
          minWidth: '60px', 
          minHeight: '30px',
          backgroundColor: 'white',
          fontSize: '12px', 
          textAlign: 'center', 
          overflow: 'hidden', 
          cursor: 'text' 
        }}
      >
        {text}
      </div>
    </Draggable>
  );
}
