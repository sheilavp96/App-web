import React from 'react';

const PropsAnuncio = (props) => {
    return (
        <>
            <li class='related-post'>
                <img src={props.img} alt='related' width='75px' height='75px' />
                <div>
                    <a href='#' class='related-link'>
                        {props.text}
                    </a>
                    <br />
                    <p class='related-author'>{props.author}</p>
                </div>
            </li>
        </>
    );
};

export default PropsAnuncio;
