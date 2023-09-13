const JJOInput = ({label, ...inputProps}) =>{

    return (
        <>
        <label>{label}</label>
        <input {...inputProps}></input>
        </>
    )
}

export default JJOInput;