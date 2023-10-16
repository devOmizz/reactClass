import React, { useEffect,useState } from 'react'

function Contact() {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('https://fakestoreapi.com/products');
    //           if (response.ok) {
    //             const data = await response.json();
    //             // setData(data);
    //             console.log(data);
    //           } else {
    //             console.log('Error occurred while fetching the API:', response.status);
    //           }
    //         } catch (error) {
    //           console.error('Error occurred while fetching the API:', error);
    //         }
    //       };
    //       fetchData();
    //       console.log('USEFFEST!');
          
    // })
    
    // const clickFunct =()=>{
    //     alert('Helo')
    // }
   
    const[count, setCount] = useState(0)
    const[color, setColor] = useState('red')

    useEffect(()=>{
        console.log("useEffect triggered!");
    })

    const add = ()=>{
        setCount(count + 1)
    }
    const sub = ()=>{
        if (count === 0){
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add} style={{backgroundColor:color, color:'white'}}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}


export default Contact