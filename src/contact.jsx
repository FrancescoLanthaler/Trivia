import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from "yup";
import * as Yup from 'yup';
import './css/contact.css';

const Contact = () => {
    return (
        <div className='App'>
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    );
}

const ContactForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', type: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                message: Yup.string()
                    .min(5, 'Must be 5 characters or more')
                    .required('Required'),
            })}
            onSubmit={() =>
                alert("Sike! You thought you could contact me? I don't even have a backend server to handle your message. You can't contact me. I'm sorry. :( But if you really want to contact me, you can email me at lanfra.dev@lanthaler.com")
            }
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="type">Type</label>
                <Field name="type" as="select">
                    <option value="feedback">Feedback</option>
                    <option value="bug">Bug</option>
                    <option value="other">Other</option>
                </Field>
                <ErrorMessage name="type" />

                <label htmlFor="message">What is on your mind?</label>
                <Field as='textarea' name="message" />
                <ErrorMessage name="message" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default Contact;