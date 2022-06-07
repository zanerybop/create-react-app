
import React,{useState} from 'react';
import './Square.css';
const tArr = []
const gArr = []
var spec = 0;
var f = document.getElementsByClassName('square')


function Square(props) {
      
      const wWord = ['к','е','т','ч','у','п']
      
      const [title, setTitle] = useState('')
      const handleChange = event => {
        setTitle(event.target.value);
      tArr.push(event.target)
        var index = props.onInput(event.target);
        
        f[index+1].focus();
        
        if(index<6){
            spec = index
        }
        else if (index<12){
           spec = index-6     
        }
        else if (index<18){
            spec = index-12     
         }
         else if (index<24){
            spec = index-18 
         }
        if(tArr[index].value == wWord[spec])
        {
            gArr.push(tArr[index])
        }
        if(index % (wWord.length) == 5 && index != 0)
        {
            if(gArr.length==6)
            {
                
                console.log("win")
            }
            for(var i = 0; i < gArr.length;i++)
            {
                gArr[i].style="background: green;"
            }
            for(var i = 0; i < tArr.length;i++)
            {
                if(wWord.includes(tArr[i].value)&&!gArr.includes(tArr[i]))
                {
                    tArr[i].style="background: yellow;"
                }
            }
            spec = 0;
           
        }
        
            
        event.target.disabled = true;
        
      };
      const handleFocus= event => {
        setTitle(event.target.value)
          if (!f[0].disabled)
          {
              f[0].focus()
          }          
      }
    return (
        
        <div>
            <input maxLength="1" type="text" autoFocus className='square' onInput={handleChange} onFocus={handleFocus}></input>
            
        </div>
    );
    
}
export default Square;
