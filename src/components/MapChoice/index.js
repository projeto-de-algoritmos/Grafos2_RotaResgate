import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css';

const MapChoice = ({allMaps, handleMap}) => {
    
    return(
        <div className="searchMapContainer">
            <Autocomplete
                disablePortal
                options={allMaps}
                getOptionLabel={(map) => map.label}
                sx={{ marginTop: "10px", width: "80%" }}
                renderInput={(params) => (
                <TextField {...params} label="Mapa" />
                )}
                onChange={handleMap}
                isOptionEqualToValue={(option, value) => option.id === value.id}  
            />
            {/* <Button
              variant="contained"
              sx={{ marginTop: "10%", width: "80%" }}
              // onClick={handleMap}
            >
              Encontrar
            </Button> */}
            
        </div>
    )
}

export default MapChoice;
