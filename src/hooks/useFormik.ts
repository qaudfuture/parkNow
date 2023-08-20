import { useDispatch } from 'react-redux';
import { setUserProfile } from '../features/register/RegisterSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    carNumberPlate: Yup.string().required('Car Number Plate is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must contain at least 8 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const useProfileForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            carNumberPlate: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setUserProfile(values));
        },
    });

    return {
        formik,
    };
};

export default useProfileForm;
