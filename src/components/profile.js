import React from 'react';
import { Formik } from 'formik';
import { register } from '../schema/register';

const Profile = () => {
    return (
  <div>
    <h1>Registration Form</h1>
    <Formik
      initialValues={{ firstName:'' , lastName:'',  email: '', dob:'', address:'',  password: ''
      }}
      
      validationSchema={register}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        vsa
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input className='input'
            type="firstName"
            name="firstName"
            placeholder="Firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          <br/>
          <input className='input'
            type="lastName"
            name="lastName"
             placeholder="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && errors.lastName}
   <br/>
          <input className='input'
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
   <br/>
            <input className='input'
            type="dob"
            name="dob"
            placeholder="Enter Birthdate"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dob}
          />
          {errors.dob && touched.dob && errors.dob}
   <br/>
          <input className='input'
            type="address"
            name="address"
             placeholder="Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address && errors.address}
   <br/>
          <input className='input'
            type="password"
            name="password"
             placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
   <br/>
          <input className='input'
            type="confirmpassword"
            name="confirmpassword"
             placeholder=" Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmpassword}
          />
          {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
   <br/>
            <input className='input'
            type="phonenumber"
            name="phonenumber"
             placeholder="Enter Phonenumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phonenumber}
          />
          {errors.phonenumber && touched.phonenumber && errors.phonenumber}
             <br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
          </div>
    )  
};

export default Profile;