import React, { useState } from 'react';

const TextAnalyzer = () => {
  const [text, setText] = useState('');

  const calculateMetrics = () => {
    const numCharacters = text.length;
    const numWords = text.split(/\s+/).filter(word => word !== '').length;
    const numSentences = text.split(/[.!?]+/).filter(sentence => sentence !== '').length;
    const numParagraphs = text.split(/\n+/).filter(paragraph => paragraph !== '').length;
    const numSpaces = text.split(' ').length - 1;
    const punctuations = /[.,:;'""\-()/!?\u2026]/;
    let numPunctuations = 0;
  
    for (let i = 0; i < text.length; i++) {
      if (punctuations.test(text[i])) {
        numPunctuations++;
      }
    }


    return {
      numCharacters,
      numWords,
      numSentences,
      numParagraphs,
      numSpaces,
      numPunctuations
    };
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const metrics = calculateMetrics();

  return (
    <div>
      <textarea 
      className='txtarea'
        value={text}
        onChange={handleChange}
        placeholder="Type, or copy/paste your content here."
        rows={15}
        cols={50}
      />
      <div className='cont'>
        <div style={{width:220}}>
        <div className='hd'><p>Number of Characters:</p> </div>
        <div className='val'>{metrics.numCharacters}</div>
        </div>


        <div style={{width:220}}>
        <div className='hd'><p>Number of Words:</p> </div>
        <div className='val'>{metrics.numWords}</div>
        </div>


        <div style={{width:230}}>
        <div className='hd'><p>Number of Sentences:</p> </div>
        <div className='val'>{metrics.numSentences}</div>
        </div>


        <div style={{width:220}}>
        <div className='hd'><p>Number of Paragraphs: </p></div>
        <div className='val'>{metrics.numParagraphs}</div>
        </div>
        
        <div style={{width:220}}>
        <div className='hd'><p>Number of Spaces:</p> </div>
        <div className='val'>{metrics.numSpaces}</div>
        </div>

        <div style={{width:240}}>
        <div className='hd'><p>Number of Punctuations: </p></div>
        <div className='val'>{metrics.numPunctuations}</div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
