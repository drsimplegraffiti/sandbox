import react, {useState} from 'react'

const SetName = () => {

    const [inputValue, setInputValue] = useState('Jonas');

    let onChange = (event)=>{
        const newValue = event.target.value
        setInputValue(newValue)
    }
    return ( 
        <div>
<input placeholder='type in here....' onChange={onChange} />
{inputValue}
        </div>
     );
}
 
export default SetName;
