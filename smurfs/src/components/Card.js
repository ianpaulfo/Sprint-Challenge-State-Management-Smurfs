import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";


export default function SmurfCard(props) {
    console.log(props);
    return (
        <Card className="card" style={{ backgroundColor: "#0384fc"}} >
        <CardTitle className="card-title">{props.smurf.name}</CardTitle>
        <CardText>Age: {props.smurf.age}</CardText>
        <CardText>Height: {props.smurf.height}</CardText>
        </Card>
    );
}