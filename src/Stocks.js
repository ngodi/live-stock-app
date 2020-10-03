import React, { useState, useEffect } from 'react';

import { updateData } from './utils/utils';
import StockTable from './components/StockTable';

import './Stocks.scss';

let response = "";
const Stocks = () => {
     const [ticker, setTicker] = useState({});
     const [color, setColor] = useState({});
         
    useEffect(() => {
      const ws = new WebSocket('ws://stocks.mnet.website');
      ws.onopen = () => {
        console.log("connected");
      };
      ws.onmessage = (event) => {
      response = JSON.parse(event.data);
        updateData(response, ticker, setTicker, setColor);
       };
      ws.onclose = () => {
        new WebSocket('ws://stocks.mnet.website');
      };
  
      return () => {
        ws.close();
      };
    },[ticker]);

 return(
   <div className="stock">
     { (!response)? "....fetching data-" :  <StockTable ticker={ticker} color={color} />}
   </div>
 )
  }
  
export default Stocks;