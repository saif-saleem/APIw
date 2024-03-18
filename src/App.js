import React from 'react';
import './App.css';
import TextAnalyzer from './TextAnalyzer';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Text Analyzer</h1>
      <p className='desc'>Text Analyzer is a simple free online tool for SEO web content analysis that helps you <br /> find most frequent phrases and words, number of characters, words, sentences and <br /> paragraphs, and estimated read and speak time of your content.</p>
      <TextAnalyzer />
    </div>
  );
}

export default App;
