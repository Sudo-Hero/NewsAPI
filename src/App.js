import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  let [theme, setTheme] = useState("dark");
  let [progress, setProgress] = useState(0);

  let apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const switchTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark")
      setTheme("dark")
    }
    else {
      document.documentElement.setAttribute("data-bs-theme", "light")
      setTheme("light")
    }
  }
  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          shadow={true}
        />
        <Navbar switchTheme={switchTheme} />
        <div>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} category={"general"} pageSize={20} country={"us"} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} category={"business"} pageSize={20} headline="Business" country={"us"} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} category={"entertainment"} pageSize={20} headline="Entertainment" country={"us"} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} category={"health"} pageSize={20} headline="Health" country={"us"} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} category={"science"} pageSize={20} headline="Science" country={"us"} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} category={"sports"} pageSize={20} headline="Sports" country={"us"} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} category={"technology"} pageSize={20} headline="Technology" country={"us"} />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  )
}