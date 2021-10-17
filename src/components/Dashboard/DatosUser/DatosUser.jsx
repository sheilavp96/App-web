import React, { useState } from 'react';
import './datosUser.css';
import react from '../../../assets/react.png';
import { withRouter } from 'react-router-dom';
import age from '../../../assets/age.png';
import facebook from '../../../assets/facebook.png';
import user from '../../../assets/user.png';
import email from '../../../assets/email.png';
import city from '../../../assets/city-map.png';
import setting from '../../../assets/settings.png';
import InfoUser from './InfoUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

// import dummyUsers from '../Registro/dummyUsers.json';

const DatosUser = (props) => {
    //obtener usuario activo
    const userCurrent = JSON.parse(sessionStorage.getItem('userSS'));
    // console.log(userCurrent);
    // console.log(typeof userCurrent);

    //cerrar sesion
    const closeSession = (e) => {
        // e.preventDefault();
        console.log('funciona cerrar sesion');
        const userSession = e.email;
        console.log(userSession);
        sessionStorage.removeItem('userSS');
        props.history.push('/Login');
    };

    //acceder al área de ajustes
    const editar = () => {
        console.log('entro a ediatr');
        props.history.push('/Ajustes');
    };

    //driodown para el responsive
    const [dropDown, setDropDown] = useState(false);
    const openDropDown = () => {
        setDropDown(!dropDown);
    };

    return (
        <div className='data-container'>
            {/* <h1 className='title-user'>Usuario activo</h1> */}

            <img className='react-img' src={react} />
            <div className='list-data-user'>
                <ul className='list-item'>
                    <InfoUser info={userCurrent.name} img={user} />
                    <InfoUser info={userCurrent.email} img={email} />
                    <InfoUser info={userCurrent.age} img={age} />
                    <InfoUser info={userCurrent.city} img={city} />
                    <InfoUser info={userCurrent.count} img={facebook} />
                    <button className='btn-ajustes' onClick={() => editar()}>
                        <img className='img' src={setting} />
                        <p className='item'> Ajustes</p>
                    </button>
                </ul>
                <button className='close' onClick={() => closeSession(userCurrent)}>
                    Cerrar sesión
                </button>
            </div>
            {/* ------------------------------------------------- */}

            <Dropdown isOpen={dropDown} toggle={openDropDown}>
                <DropdownToggle caret>Datos </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>
                        <InfoUser info={userCurrent.name} img={user} />
                    </DropdownItem>
                    <DropdownItem>
                        <InfoUser info={userCurrent.email} img={email} />
                    </DropdownItem>
                    <DropdownItem>
                        <InfoUser info={userCurrent.age} img={age} />
                    </DropdownItem>
                    <DropdownItem>
                        <InfoUser info={userCurrent.city} img={city} />
                    </DropdownItem>
                    <DropdownItem>
                        <InfoUser info={userCurrent.count} img={facebook} />
                    </DropdownItem>
                    <DropdownItem className='btn-ajustes' onClick={() => editar()}>
                        <img className='img' src={setting} />
                        <p className='item-set'> Ajustes</p>
                    </DropdownItem>
                    <DropdownItem className='close' onClick={() => closeSession(userCurrent)}>
                        Cerrar sesión
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default withRouter(DatosUser);
