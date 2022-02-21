import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
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
        </div>
    )
}

export default MapChoice;
