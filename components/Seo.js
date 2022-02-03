import React from 'react'
import Header from 'next/head'

const Seo = (props) => {
    const {title, description, image, url} = props
    const DOMAIN = 'https://https://mijo-challenge.vercel.app/'


    return (
        <Header>
            <title>{`${title} - Mijo Challenge`}</title>
            <meta property="description" content={description} />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`${DOMAIN}${url}`} />
            <meta property="og:title" content={`${title} - Mijo Challenge`}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            {/* <!-- Twitter --/> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${DOMAIN}${url}`} />
            <meta property="twitter:title" content={`${title} - Mijo Challenge`}/>
            <meta property="twitter:description" content="Página creada para la prueba técnica de mijo! brands"/>
            <meta property="twitter:image" content={image} />
        </Header>
    );
}

Seo.defaultProps ={
    title: 'Mijo Challenge',
    description: 'Página creada para la prueba técnica de mijo! brands',
    image: '/logo-mijobrands.svg',
    url: 'https://mijo-challenge.vercel.app/'
}

export default Seo;