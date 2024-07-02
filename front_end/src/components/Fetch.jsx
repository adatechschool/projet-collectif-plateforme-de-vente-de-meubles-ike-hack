import React, { useEffect, useState } from 'react';  

function FetchApi() {
    const [data, setData] = useState(null); 

    
  useEffect(() => {
    fetch('https://mon-api.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
  })
}