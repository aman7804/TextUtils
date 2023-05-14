import React,{useState} from 'react'
export default function TextForm(props){
    const[text,setText] = useState("");      //helementps to give us a Variable and Function asosiated with each other; to update variable's text you must need to use Function for it which you made; this known as UseState-Hook.
    const[preview,setPreview] = useState(text);

    // let[wordCount,setWordCount]=useState(0)
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const uppercase=()=>{
        setText(text.toUpperCase())
    }
    let uppercase_onMouseHover=()=>{
        setPreview(text.toUpperCase())
    }
    const onMouseLeave=()=>{
        setPreview(text)
    }


    const lowercase=()=>{
        setText(text.toLocaleLowerCase())
    }
    const lowercase_onMouseHover=()=>{
        setPreview(text.toLocaleLowerCase())
    }


    const clearExtraSpaces=()=>{    
        setText(text.split(/\s+/).join(' '));
    }
    const clearExtraSpaces_onMouseHover=()=>{
        setPreview(text.split(/\s+/).join(' '))
    }


    const paragraph =()=>{
        let newText = text.split(/\s+/).join(' ')
        newText = newText.split('.')
        newText=newText.map((element,index)=>{
            if(index===0){
                element=element.trim()
                element=element.replace(element.charAt(0),element.charAt(0).toUpperCase())
                element.slice(1).toLocaleLowerCase()
            }else{
                element=element.trimEnd()
                if(element.charAt(0)!==' '){
                    element = ' '+element
                }
                element=element.replace(element.charAt(1),element.charAt(1).toUpperCase())
                element.slice(2).toLocaleLowerCase()
            }
            return element
        })
        newText = newText.join('.')
        setText(newText);
    }
    const paragraph_onMouseHover =()=>{
        let newText = text.split(/\s+/).join(' ')
        newText = newText.split('.')
        newText=newText.map((element,index)=>{
            if(index===0){
                element=element.trim()
                let part1ofString = element.charAt(0).toUpperCase()
                let part2ofString = element.slice(1).toLocaleLowerCase()
                element = part1ofString + part2ofString;
            }else{
                element=element.trimEnd()
                let part1ofString = element.charAt(1).toUpperCase()
                let part2ofString = element.slice(2).toLocaleLowerCase()
                element = ' ' + part1ofString + part2ofString;
            }
            return element
        })
        newText = newText.join('.');
        setPreview(newText)
    }
    
    const sortInLine=()=>{
        setText(text.split('.').join('.\n'))
    }
    const sortInLine_onMouseHover=()=>{
        let newText = text.split('.')
        newText=newText.map((element,index)=>{
            element=element.trim()
            let part1ofString = element.charAt(0).toUpperCase()
            let part2ofString = element.slice(1).toLocaleLowerCase()
            element = part1ofString + part2ofString;
            return element
        })
        newText = newText.join('.\n')
        setPreview(newText)
        
    }

    
    function wordWrap(limit){
        let newStr=[]
        let EndSpaceIndex = 0
        for(let i=0; i<text.length; i+=EndSpaceIndex){
            let substring = text.substring(i,i+limit)
            if( i > ((text.length-1)-limit) ){                // for last-line
                substring = text.substring(i,text.length-1)
            }else if(text[i+limit] === ' ' ){              // if line has its last word.
                EndSpaceIndex = limit
                substring = text.substring(i,i+EndSpaceIndex)
            }else{
                EndSpaceIndex = substring.lastIndexOf(' ')          // if last word is'nt complete
                substring = text.substring(i,i+EndSpaceIndex)
            }
            newStr.push(substring)
        }
        setText(newStr.join('\n'))
    }
    
    function wordWrap_onMouseHover(limit){
        let newStr=[]
        let EndSpaceIndex = 0
        for(let i=0; i<text.length; i+=EndSpaceIndex){
            let substring = text.substring(i,i+limit)
            if( i > ((text.length-1)-limit) ){                // for last-line
                substring = text.substring(i,text.length-1)
            }else if(text[i+limit] === ' ' ){              // if line has its last word.
                EndSpaceIndex = limit
                substring = text.substring(i,i+EndSpaceIndex)
            }else{
                EndSpaceIndex = substring.lastIndexOf(' ')          // if last word is'nt complete
                substring = text.substring(i,i+EndSpaceIndex)
            }
            newStr.push(substring)
        }
        setPreview(newStr.join('\n'))
    }
    return(
        <>
            <div id='home'>
                <div className="container my-3" style={props.mode} id="container">
                    <h2>{props.heading}</h2>
                    <div className='an=3'>
                        <textarea style={{whiteSpace:'nowrap'}} placeholder='Enter text here...' className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='6'></textarea>
                    </div>
                    <button disabled={text.length===0} className='btn btn-primary my-2'onMouseOver={uppercase_onMouseHover} onMouseLeave={onMouseLeave} onClick={uppercase}>Uppercase</button>
                    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onMouseOver={lowercase_onMouseHover} onMouseLeave={onMouseLeave} onClick={lowercase}>Lowercase</button>
                    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onMouseOver={clearExtraSpaces_onMouseHover} onMouseLeave={onMouseLeave} onClick={clearExtraSpaces}>Clear-Extra-Spaces</button>
                    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onMouseOver={paragraph_onMouseHover} onMouseLeave={onMouseLeave} onClick={paragraph}>paragraph</button>
                    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onMouseOver={sortInLine_onMouseHover} onMouseLeave={onMouseLeave} onClick={sortInLine}>sortInLine</button>
                    <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onMouseOver={()=>{wordWrap_onMouseHover(50)}} onMouseLeave={onMouseLeave} onClick={()=>{wordWrap(50)}}>wordWrap</button>
                </div>
                <div className='container my-4' style={props.mode}>
                    <h2 style={{padding:"15px"}}>Your Text summary</h2>
                    <p style={{padding:"15px",paddingTop:"0"}}> {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charecters</p>
                </div>
                <div className="container">
                    <h2 style={props.mode}>preview</h2>
                    <div className='an=3'>
                        <textarea style={{whiteSpace:'nowrap',border:0}} className='form-control' onChange={(event)=>{setText(event.target.value)}} id='previewBox' value={preview} rows='6'></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}