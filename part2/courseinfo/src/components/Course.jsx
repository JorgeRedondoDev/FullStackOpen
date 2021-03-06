import React from "react";

const Header = (props) => <h2>{props.course.name}</h2>;

const Total = (props) => {
  const parts = props.course.parts.map((course) => course.exercises);

  return <h4>total of {parts.reduce((s, p) => s + p)} exercices</h4>;
};

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};
const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
};

export default Course;
