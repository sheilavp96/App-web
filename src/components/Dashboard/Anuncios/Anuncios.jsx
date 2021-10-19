import React, { useState } from 'react';
import './anuncios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ListaAnun from './ListaAnun';

const Anuncios = () => {
    const [dropDown, setDropDown] = useState(false);
    const openDropDown = () => {
        setDropDown(!dropDown);
    };
    return (
        <div className='anuncio-container'>
            <div className='anuncios-list'>
                <ListaAnun />
            </div>
            <Dropdown isOpen={dropDown} toggle={openDropDown} className='menu-btn'>
                <DropdownToggle className='btn-toggle' caret>
                    Anuncios{' '}
                </DropdownToggle>

                <DropdownMenu className='menu-ajustes'>
                    <DropdownItem>
                        <ListaAnun />
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
export default Anuncios;
