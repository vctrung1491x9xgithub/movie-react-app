import React, { useRef } from 'react'
import { FormControl, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';


const SearchControl = ({ searchChange }) => {
    const txtSearchRef = useRef(null);

    const onInputChange = (e) => {
        const value = e.target.value;
        if (txtSearchRef.current) {
            clearTimeout(txtSearchRef.current);
        }
        txtSearchRef.current = setTimeout(() => {
            const formValues = {
                txtSearch: value
            }
            searchChange(formValues);
        }, 500);
    }
    return (
        <FormControl fullWidth >
            <TextField
                style={{ marginBottom: 10 }}
                inputProps={{
                    min: 0,
                    style: {
                        textAlign: 'center',
                        paddingBottom: 10
                    }
                }}
                id="standard-full-width"
                placeholder="Enter keywords to search"
                type="string"
                variant="filled"
                size="small"
                onChange={(e) => onInputChange(e)}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </FormControl>
    )
}

SearchControl.propTypes = {
    onSearchChange: PropTypes.func,
}
SearchControl.defaultProps = {
    onSearchChange: null,
}
export default SearchControl
