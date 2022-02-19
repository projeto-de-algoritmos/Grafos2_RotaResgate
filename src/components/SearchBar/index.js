import React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css';

const SearchBar = ({graph, handleInitialStation, handleSearch, handleFinalStation}) => {
    
    return(
        <div className="searchContainer">
            <Autocomplete
                disablePortal
                options={graph}
                getOptionLabel={(station) => station.name}
                sx={{ marginTop: "10px", width: "80%" }}
                renderInput={(params) => (
                <TextField {...params} label="Estação Inicial" />
                )}
                onChange={handleInitialStation}

            />
            <Autocomplete
              disablePortal
              options={graph}
              getOptionLabel={(station) => station.name}
              sx={{ marginTop: "10px", width: "80%" }}
              renderInput={(params) => (
                <TextField {...params} label="Estação Final" />
              )}
              onChange={handleFinalStation}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "10%", width: "80%" }}
              onClick={handleSearch}
            >
              Encontrar
            </Button>
            
        </div>
    )
}

export default SearchBar;
