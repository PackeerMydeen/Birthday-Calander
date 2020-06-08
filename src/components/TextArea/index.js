import React,{memo} from 'react'

function TextArea(props) {
    const validJSON=(str)=>{
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

 const validate=(e)=>{
    if(validJSON(e.target.value)){
        props.onChange(JSON.parse(e.target.value))
    }
 }

    return (
        <div className='text-area'>
            <textarea id="myTextArea" onChange={e=>validate(e)} cols={100} rows={20} value={JSON.stringify(props.obj, undefined, 2)}></textarea>
        </div>
    )
}

export default memo(TextArea)