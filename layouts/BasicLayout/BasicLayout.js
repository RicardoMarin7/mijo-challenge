import Header from '../../components/Header'
import Footer from '../../components/Footer'


const BasicLayout = ({children}) => {
    return (
        <div className='container'>
            <Header />
                {children}
            <Footer/>
        </div>
    );
}
 
export default BasicLayout;