import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__info">
                
                <Label>
                    <Icon name='user' /> Ricardo Marin
                </Label>

                <a href='https://www.linkedin.com/in/ricardomarint' target='_blank' rel='noreferrer noopener'>
                    <Label>
                        <Icon name='linkedin' /> /ricardomarint
                    </Label>
                </a>

                <a href='https://github.com/RicardoMarin7' target='_blank' rel='noreferrer noopener'>
                    <Label>
                        <Icon name='github' /> /RicardoMarin7
                    </Label>
                </a>

                <a href='mailto:ricardo_marin97@hotmail.com' target='_blank'rel='noreferrer noopener'>
                    <Label>
                        <Icon name='mail' /> ricardo_marin97@hotmail.com
                    </Label>
                </a>
            </div>
        </footer>
    );
}
 
export default Footer;