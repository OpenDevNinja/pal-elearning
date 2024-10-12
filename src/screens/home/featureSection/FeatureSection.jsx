
import online from '../../../assets/img/c3.png'
import certificate from '../../../assets/img/c2.png'
import learn from '../../../assets/img/c1.png'
import "./FeatureSection.css"
const FeatureSection = () => {
  return (
    <div
      className="features-area pt-45 pb-15"
      
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
                <img  src={online} className="flaticon-online-course" alt="online coure"/>
              </div>
              <div className="features-content">
                <h3>Learn with skills over 2,420 courses</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
              <img  src={certificate} className="flaticon-certificate" alt="certificate"/>
                
              </div>
              <div className="features-content">
                <h3>Earn certificates and degrees</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="features-wrapper d-flex align-items-center mb-30">
              <div className="features-icon">
              <img  src={learn} className="flaticon-laptop" alt="flaticon-laptop"/>
                
               
              </div>
              <div className="features-content">
                <h3>Learn from anywhere, any time</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
