import GuestLayout from '../../Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import logoLight from '../../../images/logo-light.png';
export default function ForgotPassword({ status }: any) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e: any) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <React.Fragment>
            <GuestLayout>
                <Head title="Reset Password | Velzon - React Admin & Dashboard Template" />

                <div className="auth-page-content mt-lg-5">

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
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Forgot Password?</h5>
                                            <p className="text-muted">Reset password with velzon</p>

                                            <i className="ri-mail-send-line display-5 text-success mb-3"></i>

                                        </div>

                                        <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                            Enter your email and instructions will be sent to you!
                                        </Alert>

                                        {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}
                                        <form onSubmit={submit}>
                                            <Form.Label className='form-label' htmlFor="email" value="Email" > Email </Form.Label>
                                            <span className="text-danger ms-1">*</span>
                                            <Form.Control
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                value={data.email}
                                                className={'mt-1 form-control' + (errors.email ? 'is-invalid' : ' ')}
                                                autoFocus
                                                onChange={(e: any) => setData('email', e.target.value)}
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.email}</Form.Control.Feedback>

                                            <div className="flex items-center justify-end mt-4">
                                                <Button className="btn btn-success w-100" disabled={processing} type="submit">
                                                    Send Reset Link
                                                </Button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Wait, I remember my password... <Link href={route('login')} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </GuestLayout>
        </React.Fragment>
    );
}
