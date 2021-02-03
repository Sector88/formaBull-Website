import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Drag & Drop UI',
        description: 'Easily create forms by utilizing our sleek user friendly UI.'
    },
    {
        icon: <FiLayers />,
        title: 'React Hooks',
        description: 'Easily manage state with React Hooks built into your forms - automatically!'
    },
    {
        icon: <FiUsers />,
        title: 'Generate Code',
        description: 'As you build your form, your code block will be automatically generate to match exactly what you have on screen.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Simple Export',
        description: 'Copy all those lines with one click of the clipboard icon, and you’re off to your codebase!'
    },
    {
        icon: <FiUsers />,
        title: 'Custom CSS',
        description: 'Customize your form with in app styling and easily export your CSS to use in your codebase.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Future Features',
        description: 'Exciting updates are being worked on for our next big update'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            {/* use to be href="/service-details" */}
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
