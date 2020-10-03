export const updateData = (response, ticker, setTicker, setColor ) => {
    response.forEach(element => {
        let ke = element[0].toUpperCase();
        let val = element[1].toFixed(2);
        if(ticker[ke] == null){
            
        }
        else if(val >= ticker[ke]){
         setColor(prevColor => ({
           ...prevColor,
           [ke]: "green-back"
         }))}else{
           setColor(prevColor => ({
             ...prevColor,
             [ke]: "red-back"
           }))}
        setTicker(prevTicker => ({
         ...prevTicker,
         [ke]:val
        }))
      })
}