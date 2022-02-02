import React from 'react'
import { Icon } from 'semantic-ui-react'

const LandingCard = (props) => {

    const {
        title = 'Example Title',
        description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.',
        iconName = 'question circle outline',
        highlighted = false
    } = props

    return (
        <div className="LandingCard">
            <Icon name={iconName} className={`LandingCard__icon ${highlighted ? 'LandingCard__icon--Highlighted' : ''}`}/>
            <h3
                className={`LandingCard__title ${highlighted ? 'LandingCard__title--Highlighted' : ''}`}
            >{title}</h3>
            
            <p
                className={`LandingCard__description ${highlighted ? 'LandingCard__description--Highlighted' : ''}`}
            >{description}</p>
        </div>
    );
}
 
export default LandingCard;