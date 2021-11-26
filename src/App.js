// @ts-nocheck
import { Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {

  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("en")
  const [lightMode, setlightMode] = useState(false)

  const dictionaryApi = async () => {
    try {
      const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionaryApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category])

  const LightMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="App" style={{
      minHeight: '100vh',
      backgroundColor: lightMode ? "#fff" : "#121212",
      color: lightMode ? 'black' : '#fff',
      transition: "all 0.5s linear"
    }}>
      <Helmet>
        <meta name="description" content="Learn English and other selected languages faster by using Word Ware app to look up words" />
        <meta name="keywords" content="Word ware, Dictionary, Languages, Examples, Synonyms" />
        <title>Word Ware - David</title>
      </Helmet>
      <div style={{ position: "absolute", top: 0, right: 15, marginBottom: 10 }}>
        <span>{lightMode ? "Dark Mode" : "Light Mode"}</span>
        <LightMode checked={lightMode} onChange={() => setlightMode(!lightMode)} /></div>
      <Container maxWidth="md" className="container">

        <Header setCategory={setCategory} category={category} word={word} setWord={setWord} lightMode={lightMode} />
        {meanings && <Definitions word={word} meanings={meanings} category={category} lightMode={lightMode} />}

        <Footer lightMode={lightMode} />
      </Container>
    </div >
  );
}

export default App;
