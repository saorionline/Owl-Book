import { FiMenu } from 'react-icons/fi';
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <div className="container position-relative">
                <div className="row align-items-center row--0">
                    <div className="col-lg-3 col-md-6 col-4">
                    <Nav/>
                    </div>
                    <div className="col-lg-9 col-md-6 col-8 position-static">
                        <div className="header-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}