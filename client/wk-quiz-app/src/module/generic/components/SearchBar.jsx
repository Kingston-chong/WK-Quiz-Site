import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../style/SearchBar.css'

function SearhBar(){
    return(
        <>
            <TextField 
                className='search-container'
                id="search-bar" 
                placeholder='Search Quiz' 
                variant="standard"  
                slotProps={{
                    input:{
                        startAdornment:(
                            <InputAdornment>
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }
                }}
            />
        </>
    )
}

export default SearhBar;