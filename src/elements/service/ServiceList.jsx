import React ,{ Component }from "react";
import { FiCast , FiLayers, FiMonitor, FiPackage, FiCode, FiFastForward, FiCopy } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Drag & Drop UI',
        description: 'Easily create forms by dragging and dropping form elements with our sleek user friendly UI.'
    },
    {
        icon: <FiCode/>,
        title: 'React Hooks',
        description: 'Easily manage state with React Hooks pre-built into your forms'
    },
    {
        icon: <FiPackage />,
        title: 'Generate Code',
        description: 'Drop form elements on the canvas and your code block will be automatically generate your React Hook Form'
    },
    { 
        icon: <FiCopy />,
        title: 'Simple Export',
        description: 'Click the clipboard icon to copy your code block and you’re off to your codebase. It\'s that easy!'
    },
    {
        icon: <FiLayers />,
        title: 'Custom CSS',
        description: 'Customize your form with pre-built or custom styling options, not to mention, simple export for CSS code blocks as well!'
    },
    { 
        icon: <FiFastForward />,
        title: 'Future Features',
        description: 'Exciting updates are being worked on for our next big update, stay tuned!'
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
                            <a href="#features">
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
