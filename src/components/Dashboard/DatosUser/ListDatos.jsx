import React from 'react';
import PropsDatos from './PropsDatos';
import age from '../../../assets/age.png';
import facebook from '../../../assets/facebook.png';
import user from '../../../assets/user.png';
import email from '../../../assets/email.png';
import city from '../../../assets/city-map.png';
import setting from '../../../assets/settings.png';
import { DropdownItem } from 'reactstrap';

const ListDatos = () => {
    const userCurrent = JSON.parse(sessionStorage.getItem('userSS'));

    return (
        <div>
            <DropdownItem>
                <PropsDatos info={userCurrent.name} img={user} />
            </DropdownItem>
            <DropdownItem>
                <PropsDatos info={userCurrent.email} img={email} />
            </DropdownItem>
            <DropdownItem>
                <PropsDatos info={userCurrent.age} img={age} />
            </DropdownItem>
            <DropdownItem>
                <PropsDatos info={userCurrent.city} img={city} />
            </DropdownItem>
            <DropdownItem>
                <PropsDatos info={userCurrent.count} img={facebook} />
            </DropdownItem>
        </div>
    );
};

export default ListDatos;
