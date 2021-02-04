import React, { Component } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

let TeamContent = [
    {
        images: '01',
        title: 'Courtney Doss',
        designation: 'Software Engineer',
        socialNetwork: [
            // {
            //     icon: <FaFacebookF />,
            //     url: '#'
            // },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/courtneydoss/'
            },
            // {
            //     icon: <FaTwitter />,
            //     url: '#'
            // },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/cdoss777/'
            },
            {
                icon: <FaGithub />,
                url: 'https://github.com/catalyst-777'
            },

        ]
    },
    {
        images: '02',
        title: 'Mario Eldin',
        designation: 'Software Engineer',
        socialNetwork: [
            // {
            //     icon: <FaFacebookF />,
            //     url: '#'
            // },
           {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/marioeldin/'
            },
            // {
            //     icon: <FaTwitter />,
            //     url: '#'
            // },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/marioeldin/'
            },
            {
                icon: <FaGithub />,
                url: 'https://github.com/Sector88'
            },,

        ]
    },
    {
        images: '03',
        title: 'Windu Sayles',
        designation: 'Software Engineer',
        socialNetwork: [
            // {
            //     icon: <FaFacebookF />,
            //     url: '#'
            // },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/windusayles/'
            },
            // {
            //     icon: <FaTwitter />,
            //     url: '#'
            // },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/windubitably/'
            },
            {
                icon: <FaGithub />,
                url: 'https://github.com/windusayles'
            },

        ]
    },
    {
        images: '06',
        title: 'Max Nikitin',
        designation: 'Software Engineer',
        socialNetwork: [
            // {
            //     icon: <FaFacebookF />,
            //     url: '#'
            // },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/maxnikitin23/'
            },
            // {
            //     icon: <FaTwitter />,
            //     url: '#'
            // },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/max_nikitin23/'
            },
            {
                icon: <FaGithub />,
                url: 'https://github.com/nikitinmax2300/'
            },
        ]
    },
    // {
    //     images: '05',
    //     title: 'Fatima Asrafi',
    //     designation: 'Front-end Engineer',
    //     socialNetwork: [
    //         {
    //             icon: <FaFacebookF />,
    //             url: '#'
    //         },
    //         {
    //             icon: <FaLinkedinIn />,
    //             url: '#'
    //         },
    //     ]
    // },
    // {
    //     images: '12',
    //     title: 'Al-Amin Bali',
    //     designation: 'Sr. Graphic Designer',
    //     socialNetwork: [
    //         {
    //             icon: <FaFacebookF />,
    //             url: '#'
    //         },
    //         {
    //             icon: <FaLinkedinIn />,
    //             url: '#'
    //         },
    //         {
    //             icon: <FaTwitter />,
    //             url: '#'
    //         },
    //     ]
    // }
];


class Team extends React.Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div style={{borderRadius: '50%'}} className="thumbnail">
                                <img src={`/assets/images/team/team-${value.images}.png`} alt="Blog Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                            </div>
                            <ul className="social-icon" >
                                {value.socialNetwork.map((social, index) =>
                                    <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;