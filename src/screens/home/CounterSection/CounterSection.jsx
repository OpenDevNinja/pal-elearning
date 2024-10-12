


import CountUpContent from './counter/CountUpContent';
import { counter_data } from './datacount';
import './CounterSection.css'

const CounterSection = () => {
    return (
        <div className="counter-area pt-120 mb-5 mt-5">
            <div className="container">
                <div className="row">
                    {
                        counter_data && counter_data.slice(0, 4).map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="counter-wrapper text-center mb-30">
                                    <div className="counter-icon">
                                        {item.icon && <item.icon />}
                                        <div className="count-number">
                                            <span className="counters"> <CountUpContent number={item.countNum} text={item.countPlus}></CountUpContent></span>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
