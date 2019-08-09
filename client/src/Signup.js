import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

class Signup extends React.Component {
    render() {
        const { errors, touched, handleSubmit } = this.props;
        return (
            <div>
                SIGN UP
                <Form onSubmit={handleSubmit}>
                    <div>
                        {touched.username && errors.username && <p>{errors.username}</p>}
                        <Field type="text" name="username" placeholder="Username" />
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
        password: Yup.string().min(6).required()
    }),

    handleSubmit: async values => {
        let { data } = await axios.post('http://localhost:5000/api/register', values);
        console.log(data);
    }

})(Signup);

export default FormikRegisterForm;
