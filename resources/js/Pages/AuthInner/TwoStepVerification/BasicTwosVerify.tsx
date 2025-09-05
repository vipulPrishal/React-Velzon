import React from 'react';
import { Button, Card, Col, Container, Row, } from 'react-bootstrap';

//import images
import logoLight from "../../../../images/logo-light.png";
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '../../../Layouts/GuestLayout';

const BasicTwosVerify = () => {

    const getInputElement = (index: number): HTMLInputElement => {
        return document.getElementById('digit' + index + '-input') as HTMLInputElement;
    };
    const movehrefNext = (index: any) => {
        if (getInputElement(index).value.length === 1) {
            if (index !== 4) {
                getInputElement(index + 1).focus();
            } else {
                getInputElement(index).blur();
                // Submit code
                console.log('submit code');
            }
        }
    }


    return (
        <React.Fragment>
            <GuestLayout>
                <Head title='Two Step Verification | Velzon - React Admin & Dashboard Template' />
                <div className="auth-page-wrapper">
                    <div className="auth-page-content">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                                        <div>
                                            <Link href="/" className="d-inline-block auth-logo">
                                                <img src={logoLight} alt="" height="20" />
                                            </Link>
                                        </div>
                                        <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col md={8} lg={6} xl={5}>
                                    <Card className="mt-4">
                                        <Card.Body className="p-4">
                                            <div className="mb-4">
                                                <div className="avatar-lg mx-auhref">
                                                    <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                                                        <i className="ri-mail-line"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-2 mt-4">
                                                <div className="text-muted text-center mb-4 mx-lg-3">
                                                    <h4 className="">Verify Your Email</h4>
                                                    <p>Please enter the 4 digit code sent href <span className="fw-semibold">example@abc.com</span></p>
                                                </div>

                                                <form>
                                                    <Row>
                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit1-input" className="visually-hidden">Digit 1</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit1-input" onKeyUp={() => movehrefNext(1)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit2-input" className="visually-hidden">Digit 2</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit2-input" onKeyUp={() => movehrefNext(2)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit3-input" className="visually-hidden">Digit 3</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit3-input" onKeyUp={() => movehrefNext(3)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit4-input" className="visually-hidden">Digit 4</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit4-input" onKeyUp={() => movehrefNext(4)} />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>
                                                <div className="mt-3">
                                                    <Button className="w-100 btn-success">Confirm</Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Didn't receive a code ? <Link href="/auth-pass-reset-basic" className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>
            </GuestLayout >
        </React.Fragment >
    );
};

export default BasicTwosVerify;