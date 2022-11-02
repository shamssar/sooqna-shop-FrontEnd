import React from "react";
import  Container  from "react-bootstrap/Container";
import './AboutCards.css'


function AboutCards() {
    const members = [{
        name: 'Esraa Banat',
        nickName:'Full Stack Developer',
        breif: 'My coding journey started unexpectedly when I left my job. I remember that I was so interested in learning how to build crazy websites, so I jumped at the chance and decided to enter the coding world to discover it, know its secrets and magic, and create things from scratch. It was amazing, and I found myself in.',
        image: require('./AboutAssets/Esraa.png'),
        github: 'https://github.com/EsraaBanat',
        linkekIn: 'https://www.linkedin.com/in/esraabanat/'
    },
    {
        name: 'Shams Alsaraireh',
        nickName: 'Full Stack Developer', 
        breif: 'An energetic, ambitious full stack developer who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with.',
        image: require('./AboutAssets/shams.jpg'),
        github: 'https://github.com/shamssar',
        linkekIn: 'https://www.linkedin.com/in/shams-alsaraireh/'
    },
    {
        name: 'Sohaib Al-Momani',
        nickName: 'Full Stack Developer',
        breif: 'I studied Computer Science at The Hashemite University (HU) and am looking forward to developing my programming skills. and he have good knowledge in those language ~Java Scribe , HTML , CSS~.',
        image: require('./AboutAssets/suhaib.png'),
        github: 'https://github.com/SohaibAlmomani',
        linkekIn: 'https://www.linkedin.com/in/sohaib-almomani/'
    },
    {
        name: 'Ahmad Amaireh',
        nickName: 'Full Stack Developer',
        breif: 'Senior Quality Assurance, and he have good knowledg in those language ~Java Scribt , HTML , CSS~.',
        image: require('./AboutAssets/Ahmad.png'),
        github: 'https://github.com/AhmadAmaireh?tab=repositories',
        linkekIn: 'https://www.linkedin.com/in/ahmad-al-amaireh-95466b74/'
    },
    {
        name: 'Bnan Zhran',
        nickName: 'Full Stack & RPA Developer',
        breif: 'I have a good experience in problem solving, technical solving , Stable solving Also solutions with permanent algorithms Programming language that I familiar with {Java, JavaScript (Strong),C#(Strong),VB,C++,Kotlin(Strong), Python',
        image: require('./AboutAssets/bnan.png'),
        github: 'https://github.com/ebnanzhran',
        linkekIn: 'https://www.linkedin.com/in/eng-bnan-zhran-8679b0202/'
    }
    ]
    return (
    <>
        <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem', display:'grid', gridTemplateColumns:'26rem 26rem 26rem' }} >
                {members.map((member) => {
                    return(
                    <figure className="image-block">
                        <img src={member.image} alt="" />
                        <figcaption>
                            <h3 id='name'>
                                {member.name}
                            </h3>
                                <h5 className="title">{member.nickName}</h5>
                            <br/>
                            <p id='breif'>{member.breif}</p>
                            <br/>
                            <ul className="social-icons">
                                    <a href={member.linkekIn} target="_blank"><i className="fa fa-linkedin" id='linkedin' ></i></a>
                                    <a href={member.github} target="_blank"><i className="fa fa-github" id='github' ></i></a>
                            </ul>
                        </figcaption>
                    </figure>
                    )
                })}
        </Container>
    </>
    );
}

export default AboutCards;