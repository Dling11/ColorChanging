import colorNames from 'colornames'

const Input = ({
        colorVaue, setColorValue,setHexValue, isDarkText, setIsDarkText
        }) => {
            return(
                <form onSubmit={(e)=> e.preventDefault()} >
                    <label> Add Color Name: </label>
                    <input 
                        autoFocus
                        type="text"
                        required
                        placeholder="Input Color Name Here"
                        value={colorVaue}
                        onChange={(e)=> {
                            setColorValue(e.target.value);
                            setHexValue(colorNames(e.target.value));
                        }}
                    />

                    <button
                        type='button'
                        onClick={()=> setIsDarkText(!isDarkText)}      //if toggle it will set the usestate boolean to false
                    >
                        Toggle Text Color
                    </button>
                </form>
            )
}

export default Input