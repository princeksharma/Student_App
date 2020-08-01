import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SmileTwoTone,
} from '@ant-design/icons';

import { Form, Input, Button } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AdmissionForm = () => {
    const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        class: '',
        yearOfPassing: '',
        percentage: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
            .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
            .max(20,'Max Character size is only 20')
            .required('Name is required'),
        lastName: Yup.string()
            .matches(alpha, {message: "Enter Valid Last Name", excludeEmptyString: true })
            .max(20,'Max Character size is only 20')
            .required('Last Name is required'),
        class: Yup.string()
            .required('class field is required'),
        yearOfPassing: Yup.number()
            .max(2017, 'Invalid! Year of passing <= 2017 ')
            .required('Year of passing is required'),
        percentage: Yup.number()
            .required('Percentage is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            name: values.name,
            lastName: values.lastName,
            class: values.class,
            yearOfPassing: values.yearOfPassing,
            percentage: values.percentage
          };

          console.log(dataToSubmit);

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className='app'>
            <h1>
              Fill up Admission Form <SmileTwoTone />
            </h1>
            <Form
              style={{ minWidth: '340px' }}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >
              <Form.Item required label='Name'>
                <Input
                  id='name'
                  placeholder='Enter your name'
                  type='text'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className='input-feedback'>{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label='Last Name'>
                <Input
                  id='lastName'
                  placeholder='Enter your Last Name'
                  type='text'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className='input-feedback'>{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label='Class'
              >
                <Input
                  id='class'
                  placeholder='Enter your class Section'
                  type='text'
                  value={values.class}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.class && touched.class
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.class && touched.class && (
                  <div className='input-feedback'>{errors.class}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label='Year Of Passing'
              >
                <Input
                  id='yearOfPassing'
                  placeholder='Enter your Passing Year'
                  type='number'
                  value={values.yearOfPassing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.yearOfPassing && touched.yearOfPassing
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.yearOfPassing && touched.yearOfPassing && (
                  <div className='input-feedback'>{errors.yearOfPassing}</div>
                )}
              </Form.Item>

              <Form.Item required label='Percentage' >
                <Input
                  id='percentage'
                  placeholder='Enter your Percentage'
                  type='number'
                  value={values.percentage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.percentage && touched.percentage
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.percentage && touched.percentage && (
                  <div className='input-feedback'>{errors.percentage}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type='primary'
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AdmissionForm;
