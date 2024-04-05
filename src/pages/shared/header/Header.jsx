import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className="max-w-6xl mx-auto">

            <div className='text-center mt-4 mb-3'>
                <img src={logo} alt="" />
                <p className='text-xl'>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;