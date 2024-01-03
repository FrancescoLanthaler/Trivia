import React from 'react';
import { useFormik } from 'formik';
import { object, string } from "yup";
import * as Yup from 'yup';
import './contact.css';

const Contact = () => {
    return (
        <div className='App'>
            <h1>Contact Me</h1>
            <Form />
        </div>
    );
}

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),

            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            formik.setFieldValue('message', '');
            alert("Sike! You thought you could contact me? I don't even have a backend server to handle your message. You can't contact me. I'm sorry. :( But if you really want to contact me, you can email me at lanfra.dev@lanthaler.com")
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name} // Update the value to match the input field name
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="message">What is on your mind?</label>
            <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;