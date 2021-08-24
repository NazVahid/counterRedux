import React from "react";
import { Card, Button, Alert, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decreament, increament, sign_in } from './../actions/counter';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();

    return (
        <Card bg="secondary" className="mx-auto w-50">
            <Card.Body className="mx-auto">
                <Alert variant="info">
                    شمارش :{" "}
                    <Badge pill variant="success">
                        {counter}
                    </Badge>
                </Alert>
                <Button variant="danger" className="fa fa-plus m-2"
                    onClick={() => dispatch(increament())} />
                <Button variant="danger" className="fa fa-minus m-2"
                    onClick={() => dispatch(decreament())} />
                <br />
                <Button variant="info"
                    onClick={() => dispatch(sign_in())}>ورود</Button>
            </Card.Body>
            {login ? (
                <Card.Footer className="text-center">
                    <p style={{ color: "white" }}>شما وارد شده اید</p>
                </Card.Footer>
            ) : null}
        </Card>
    );
};

export default Counter;
