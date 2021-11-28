import {
    Badge,
    // FormControl, TextField, InputAdornment, ThemeProvider,
    // createTheme
} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
import React, { Fragment, useEffect } from 'react'
import {
    LeftMenu, LeftMenuItem, Logo, Menu, MenuItem, MenuLink, NavBar, NavBarBrand, NavBarContent,

} from './Header.styles'
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { NAV_LINKS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';

// import { useSelector } from 'react-redux';

// const darkTheme = createTheme({
//     palette: {
//         type: "dark",
//     }
// })

const Header = () => {
    // const [myCollection, setMyCollection] = useState([]);
    const collection = useSelector(state => state.collections.collectionData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage && localStorage.getItem('collection')) {
            dispatch(collectionActions.addCollection(JSON.parse(localStorage.getItem('collection'))));
        }
    }, [dispatch]);

    const renderMenu = () => {
        let menuItems = null;
        if (NAV_LINKS) {
            menuItems = NAV_LINKS.map(item => {
                return (
                    <MenuItem key={item.id} onClick={() => window.scroll(0, 0)}>
                        <MenuLink
                            to={item.path}
                            exact={item.exact}
                            activeClassName="active"
                        >
                            {item.name}
                        </MenuLink>
                    </MenuItem>
                );
            });
        }
        return menuItems;
    }
    return (
        <Fragment>
            <NavBar>
                <NavBarContent>
                    {/* <NavButtonMenuMobile
                        onClick={() => setShowMenuMobile(!showMenuMobile)} 
                    >
                       {
                           showMenuMobile === true ?
                           <MenuIcon fontSize="large" />
                           :
                           <CloseIcon fontSize="large"/>
                       } 
                    </NavButtonMenuMobile> */}
                    <NavBarBrand to="/" onClick={() => { window.scroll(0, 0) }}>
                        <Logo color={'#EF5014'}>VCT</Logo>
                        <Logo>Films</Logo>
                    </NavBarBrand>
                    <Menu>
                        {renderMenu()}
                    </Menu>
                    <LeftMenu>
                        <LeftMenuItem to="/search" activeClassName="active">
                            <SearchIcon />
                            {/* <ThemeProvider theme={darkTheme}>
                            <FormControl >
                                <TextField
                                    id="input-with-icon-textfield"
                                    placeholder="Nhập từ khoá tìm kiếm"
                                    color="secondary"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </ThemeProvider> */}
                        </LeftMenuItem>
                        <LeftMenuItem to="/collection" activeClassName="active">
                            <Badge badgeContent={collection?.length} color="secondary">
                                <VideoLibraryIcon />
                            </Badge>
                        </LeftMenuItem>
                    </LeftMenu>
                </NavBarContent>
            </NavBar>
        </Fragment>
    )
}

export default Header
