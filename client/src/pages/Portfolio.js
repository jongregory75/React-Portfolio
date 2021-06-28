import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import scheduler from "../img/scheduler.JPG";
import dailyDive from "../img/dailydive_ss.JPG";
import dayPlanner from "../img/dayplanner_ss.JPG";

function Portfolio() {
  const projectInfo = [
    {
      id: 1,
      image: scheduler,
      title: "AppointmentScheduler",
      desc: "An application to schedule your customer appointments",
      deploy: "https://fast-bastion-27038.herokuapp.com/",
      github: "https://github.com/Ajurgs/Appointment-Scheduler",
    },
    {
      id: 2,
      image: dailyDive,
      title: "TheDailyDive",
      desc: "An application to give you whats important every day",
      deploy: "https://chequelito.github.io/theDailyDive/",
      github: "https://github.com/Chequelito/theDailyDive",
    },
    {
      id: 3,
      image: dayPlanner,
      title: "Day Planner",
      desc: "A helpful day planner that utilizes local storage",
      deploy: "https://jongregory75.github.io/Day-Planner/",
      github: "https://github.com/jongregory75/Day-Planner/",
    },
  ];
  const renderCard = (card) => {
    return (
      <Card className="projectCard" style={{ width: "18rem" }} key={card.id}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.desc}</Card.Text>
          <Button href={card.github} variant="primary">
            Github
          </Button>
          <Button href={card.deploy} variant="primary">
            Deployed
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="flex">{projectInfo.map(renderCard)}</div>;
}

export default Portfolio;
