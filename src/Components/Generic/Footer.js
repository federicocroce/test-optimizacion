import React, { components } from 'react';

const Footer = props => {

    const footer = props.footer;

    const getImgName = (url) =>{
        let begin = url.search("%2F") +3;
        let end = url.indexOf(".", begin)

        return url.slice(begin, end)
    }

    return (
        <footer className="container-footer">
            {footer.list.length > 0 ?
                <section>
                    <h4>Tecnologías utilizadas en este CV</h4>
                    {footer.list.map((data, index) => {
                        return (
                            <a target="_blank" href={data.link} key={index} className="img-tecnologies">
                                <img src={data.img} alt={getImgName(data.img)} width="40" height="40"></img>
                            </a>
                        );
                    })}
                </section>
                : null
            }
        </footer>
    );
}

export default Footer;