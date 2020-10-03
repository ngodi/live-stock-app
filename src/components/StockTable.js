import React from 'react';
import TimeAgo from './TimeAgo';
import PropTypes from 'prop-types';

const StockTable = ({ ticker, color}) => {
  return (
    <div className="stock-table">
       <table>
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Last Update</th>
                </tr>
            </thead>
            <tbody>
                {
                Object.keys(ticker).map(function(key, value) {
                    return (
                    <tr key={key}>
                        <td className="item-name">{key}</td>
                        <td className={color[key]}>{ticker[key]}</td>
                        <td className="elapsed-time"><TimeAgo /></td>
                    </tr>
                    )
                })
                }
            </tbody>
       </table>
   </div>
  )
}
export default StockTable;

StockTable.propTypes = {
    color: PropTypes.object,
    ticker: PropTypes.object
}