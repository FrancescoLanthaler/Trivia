import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from "yup";
import * as Yup from 'yup';
import './contact.css';

const Contact = () => {
    return (
        <div className='App'>
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    );
}

const ContactForm = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         message: '',
    //         subject: '',
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //             .max(15, 'Must be 15 characters or less')
    //             .required('Required'),

    //         email: Yup.string().email('Invalid email address').required('Required'),
    //     }),
    //     onSubmit: values => {
    //         formik.setFieldValue('message', '');
    //         alert("Sike! You thought you could contact me? I don't even have a backend server to handle your message. You can't contact me. I'm sorry. :( But if you really want to contact me, you can email me at lanfra.dev@lanthaler.com")
    //     },
    // });
    return (
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor="name">Name</label>
        //     <input
        //         id="name"
        //         name="name"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.name}
        //     />
        //     {formik.touched.name && formik.errors.name ? (
        //         <div>{formik.errors.name}</div>
        //     ) : null}

        //     <label htmlFor="email">Email Address</label>
        //     <input
        //         id="email"
        //         name="email"
        //         type="email"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.email}
        //     />
        //     {formik.touched.email && formik.errors.email ? (
        //         <div>{formik.errors.email}</div>
        //     ) : null}

        //     <label htmlFor="subject">Type</label>
        //     <select
        //         id="subject"
        //         name="subject"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.subject}
        //     />
        //     {formik.touched.subject && formik.errors.subject ? (
        //         <div>{formik.errors.subject}</div>
        //     ) : null}

        //     <label htmlFor="message">What is on your mind?</label>
        //     <textarea
        //         id="message"
        //         name="message"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.message}
        //     ></textarea>
        //     {formik.touched.message && formik.errors.message ? (
        //         <div>{formik.errors.message}</div>
        //     ) : null}

        //     <button type="submit">Submit</button>
        // </form>



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