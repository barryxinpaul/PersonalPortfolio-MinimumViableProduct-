import React, { useState } from "react";
import "./Timeline.css";

const Timeline = () => {
    const [events, setEvents] = useState([
        {
            date: 'Software Engineer | May 2024-present',
            title: 'Propel Holdings (TSE: PRL)',
            description: [
                'Developed the Agent Tool Kit by consolidating tools, resources, and product information into an internally integrated web application using ReactJS resulting in a 30% improvement in workflow efficiency for service caller agents ',
                'Redesigned user dashboard UI/UX on 5 subsidiaries web applications using SCSS, with an emphasis on customer focus ',
                'Converted UI mockups and sketch specifications into dynamic React webpages across 2 sprints; 12+ new webpages ',
            ],
            expanded: false,
        },
        {
            date: 'Product Operations | Apr. 2024 -Sept. 2024',
            title: 'HotTakes Sports',
            description: [
                'Led a cross-functional team of 8 engineers and designers to drive product features from conception to execution; monitored interface design iteration cycles through low to high fidelity wireframes, mock-ups, and prototypes',
                'Formulated a US Market Expansion strategy by conducting a Total Addressable Market Analysis, Market Gap Analysis, and Competitor Landscape Analysis; advised to launch in 7 states resulting in 500+ App Store downloads',
                'Drove User-Centered Design by conducting user research and interviews defining user profiles, requirements and use cases, while enhancing usability through A/B testing and adhering to design principles to improve UX experience',
            ],
            expanded: false,
        },
        {
            date: 'Software Engineer Fellow | Jul. 2024-present',
            title: 'Headstarters AI',
            description: [
                'Building 5 AI centered projects in 5 weeks and develop an application from scratch that has 1000+ users for a final project'
            ],
            expanded: false,
        },
        {
            date: 'Project Lead | Sept. 2023-present',
            title: 'The Aleph Group',
            description: [
                'Incoming Project Lead tasked with leading a team of 5 junior analysts, conducting client interviews, drafting scoping documents, and setting direction for the project in alignment with client objectives; Previously Consultant Analyst',
                'Built initial prototype / minimum viable feature that allowed users to search through database based on “need”',
                'Analyzed various influencers and marketing strategies in the sports industry to develop a social media and marketing campaign for a startup that increased social media engagement by 80% and increased pre-launch signups by 40% '
            ],
            expanded: false,
        },
        {
            date: 'VP of Development | Sept. 2023-present',
            title: 'W5 - Entrepreneurship',
            description: [
                'Revamped W5’s flagship case competition structure by introducing separate novice and experienced pools; resulted in a 120% increase in participant engagement and a 40% increase in event profits ($3k+) ',
                "Organized a firm's trip for 60 students by managing logistics planning and partnership outreach to firms",
                'Spearheading the launch of the Product Management flagship event; W5 Hackacomp Product Competition'
            ],
            expanded: false,
        },
        {
          date: 'Director of Events | Sept. 2023 - Apr. 2024',
          title: '180 Degrees Consulting',
          description: [
              'Spearheaded the launch of the first 180DC flagship event at Western; Frontier Case Competition, by managing logistics planning, case writing, and event day execution',
              'Outreach and partnership with 25+ firms to secure sponsorship funding and firm relationships for future events',
          ],
          expanded: false,
      },
    ]);

    const handleItemClick = (index) => {
        setEvents((prevEvents) => {
            const updatedEvents = prevEvents.map((event, idx) => {
                if (idx === index) {
                    return { ...event, expanded: !event.expanded };
                } else if (event.expanded) {
                    return { ...event, expanded: false };
                }
                return event;
            });
            return updatedEvents;
        });
    };

    return (
        <div className="timeline-grid">
            {events.map((event, index) => (
                <div
                    className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
                    key={index}
                    onClick={() => handleItemClick(index)}
                >
                    <div className="timeline-inner">
                        <div className="timeline-front">
                            <div className="timeline-content">
                                <h2>{event.title}</h2>
                                <div className="date">{event.date}</div>
                                <div className="more">
                                    <p>Click for more</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-back">
                            <div className="timeline-content">
                                <h2>{event.title}</h2>
                                {event.description.map((desc, descIndex) => (
                                    <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
