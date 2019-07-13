import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";



// dateCreated: { type: Date, default: Date.now },
//     information: {
//       firstName: "Jon",
//       lastName: "Snow",
//       userName: "SecretTargy",
//       phoneNumber: 5555555555,
//       email: "shesmuhqueen@thenorth.com",
//       address: {
//         lineOne: "Fist of the Last Men",
//         lineTwo: "Cave Three",
//         city: "Wargville",
//         state: "North",
//         zip: 12345
//       }
//     },
//     pickupCurrentlyRequested: false
// asset
//     type: Schema.Types.ObjectId,
//     ref: "Asset"
// }

class NewUser extends Component {

    render() {
        return (


            <Form  action="http:localhost/3001/api/admin/newUser" method="post">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        )
    }
}

export default NewUser;