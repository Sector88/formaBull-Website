import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


class CounterOne extends React.Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }


    render(){
        let Data = [
            {
                countNum : 137,
                countTitle: 'Yup, this is our cups of coffee count, and yes we joined the "coffe counter" bandwagon.',
            },
            {
                countNum : 288,
                countTitle: 'Oh, were you thinking a hours spent counter too? Don\'t mind if we do.',
            },
            {
                countNum : Infinity,
                countTitle: 'How much we love React, Hooks, and FORMS!',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;