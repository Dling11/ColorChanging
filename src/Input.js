const Input = ( {colorValue, setColorValue} ) => {
    return(
        <form onSubmit={(e)=> e.preventDefault()} >
            <label>Add Color Name: </label>
            <input 
            autoFucos
            type="text"
            placeholde= "Add Color Name Here"
            required
            value={colorValue}
            onChange={(e)=> setColorValue(e.target.value)}
            />
        </form>
    )
}
export default Input