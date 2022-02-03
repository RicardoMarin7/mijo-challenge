import { useRouter } from 'next/router'
import { Button } from 'semantic-ui-react'

const EmptySadFace = (props) => {

    const router = useRouter()

    const {
        title = 'Error 404 Not Found', 
        subtitle = 'oh no, something went wrong', 
        buttonTitle = 'Go Home', 
        buttonOnClickFunction = () => router.push('/')
    } = props

    return ( 
        <div className="EmptySadFace">
            <div className="EmptySadFace__container">
                <div id="error-box">
                    <div className="face2">
                    <div className="eye"></div>
                    <div className="eye right"></div>
                    <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message"><h2 className="alert">{title}!</h2><p>{subtitle}</p></div>
                    <Button className="button-box" primary onClick={buttonOnClickFunction}>{buttonTitle}</Button>
                </div>
            </div>
        </div>
     );
}
 
export default EmptySadFace;
