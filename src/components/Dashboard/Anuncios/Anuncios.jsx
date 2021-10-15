import React, { useState } from 'react';
import './anuncios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Anuncios = () => {
    const [dropDown, setDropDown] = useState(false);
    const openDropDown = () => {
        setDropDown(!dropDown);
    };
    return (
        <div className='anuncio-container'>
            <div className='anuncios-list'>
                <li>Relleno1</li>
                <li>Relleno2</li>
                <li>Relleno3</li>
            </div>
            <Dropdown isOpen={dropDown} toggle={openDropDown}>
                <DropdownToggle caret>Anuncios </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>Relleno 1</DropdownItem>
                    <DropdownItem>Relleno 2</DropdownItem>
                    <DropdownItem>Relleno 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
export default Anuncios;
