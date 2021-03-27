import React, {useState} from "react";
import styled from "styled-components";

import fetchQuotes from "../fetchQuotes"

import Button from "./Button";
import Header from "./Header";
import CardContainer from './CardContainer'
import Spinner from './Spinner'

import { CONTENT_WIDTH, SPACING, DEVICE } from "../constants";

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L} ;

`;

const App = () => {

  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)


  let fetchData = () =>{

    setQuotes([])
    setLoading(true)
   

    let data = fetchQuotes()
    data.then((response)=>{

      setQuotes(response.data)
      setLoading(false)
  
      
    }).catch((error) => console.log(error))

  }
  
  return (
    <>
      <Header />

      <StyledContentWrapper>
        <Button buttonDisabled={loading} handleClick={fetchData} >{loading ? "Loading...":"Load quotes"}</Button>
        {quotes.length ? <CardContainer quotes={quotes} /> : null}
        {loading ? <Spinner /> : null}
      </StyledContentWrapper>
    </>
  );
};

export default App;
