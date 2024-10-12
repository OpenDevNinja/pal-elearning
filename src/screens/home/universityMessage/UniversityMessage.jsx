
import { Link } from 'react-router-dom';
import MessageImg from '../../../assets/img/bg/message-meta.webp';
import MessageStickerImg from '../../../assets/img/bg/message-sticker.webp';
import './UniversityMessage.css'
const UniversityMessage = () => {
    return (
        <div className="university-message-area mb-5 mt-5 pt-110 pb-105">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title mb-30">
                            <h2>Welcome to<span className="down-mark-line-2">Eduman</span>University Education Online Platform</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="message-profile-text">
                            <span>Eduma helps you to develop essential education and your career of years experiences.
                            </span>
                            <p>Transform your life through education to make the most of each semester to choose the
                                best major. Prepare for grad school. Whatever it is, you can do it here. Explore our
                                digital viewbook. Your journey starts here.</p>
                        </div>
                        <div className="message-meta">
                            <Link href="/instructor-profile">
                            <img src={MessageImg} style={{width:'100%', height:'auto'}} alt="meta-img"/>
                            </Link>
                            <div className="message-meta-link">
                                <Link href="/instructor-profile"><h4>Daniel Abraham</h4></Link>
                                <p>Vice Chancellor, Eduma</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="message-sticker position-relative">
                        <img src={MessageStickerImg} style={{width:'100%', height:'auto'}} alt="img"/>
                            <div className="etablist-price">
                                <p> Etablished <span>1990</span> USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityMessage;