import BasicLayout from '../layouts/BasicLayout'
import EmptySadFace from '../components/EmptySadFace'
import Seo from '../components/Seo';

const Error404 = () => {
    return (
        <BasicLayout>
            <Seo
                title='Error 404'
            />
            <EmptySadFace />
        </BasicLayout>
    );
}
 
export default Error404;