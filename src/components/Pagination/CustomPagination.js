import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { CustomPagi } from './CustomPagination.styles';

const darkTheme = createTheme({
    palette: {
        type: "dark",
    }
})

const CustomPagination = ({ setPage, numberOfPages, currentPage }) => {
    const handlePageChange = (e) => {
        let pageSelected = e.target.textContent;
        setPage(pageSelected);
        window.scroll(0, 0);
    }
    return (
        <CustomPagi>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numberOfPages}
                    page={parseInt(currentPage)}
                    shape="rounded"
                    size="small"
                    onChange={(e) => handlePageChange(e)}
                    hidePrevButton
                    hideNextButton
                />
            </ThemeProvider>
        </CustomPagi>
    )
}

export default CustomPagination
