import React, { useState, useEffect } from 'react';
import { updateData, formatChartData } from './utils/utils';
import StockTable from './components/StockTable';
import MyChart from './components/MyChart';
import './Stocks.scss';

let response = '';
let chartData = [['Element', 'Price', { role: 'style' }] ,['', 0, '']] ;
const Stocks = () => {
  const [ticker, setTicker] = useState({});
  const [color, setColor] = useState({});
  useEffect(() => {
    const ws = new WebSocket('//ws.stocks.mnet.website');
    ws.onopen = () => {
      console.log('connected');
    };
    ws.onmessage = (event) => {
      response = JSON.parse(event.data);
      updateData(response, ticker, setTicker, setColor);
      chartData = formatChartData(ticker, chartData);
    };
    ws.onclose = () => {
      new WebSocket('//ws.stocks.mnet.website');
    };
  
    return () => {
      ws.close();
    };
  },[ticker]);

  return(
   <div className="stock">
      <MyChart data={chartData}/>
     { (!response)? '....fetching data-' :  <StockTable ticker={ticker} color={color} />}
   </div>
  )
}
  
export default Stocks;