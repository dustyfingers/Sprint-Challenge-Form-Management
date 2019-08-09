import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Signup = ({ errors, touched, handleSubmit }) => {
    return (
        <div>
            SIGN UP
            <Form onSubmit={handleSubmit}>
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email" />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">Submit!</button>
            </Form>
        </div>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, email, password }) {
        return {
            username: username || '',
            email: email || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().min(6).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
    }),

    handleSubmit: async values => {
        let res = await axios.post('https://reqres.in/api/users', values);
        console.log(res);
    }

})(Signup);

export default FormikRegisterForm;
