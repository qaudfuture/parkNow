import { useFormik } from 'formik';
import * as Yup from 'yup';

interface RegistrationFormValues {
    firstname: string;
    lastname: string;
    carNumber: string;
    email: string;
    contactNumber: number;
    password: string;
    confirmPassword: string;
    // Add other fields specific to the form
}

interface LoginFormValues {
    email: string;
    password: string;
    // Add other fields specific to the form
}

interface UseRegistrationFormResult {
    formik: FormikProps<RegistrationFormValues>;
    handleValidation: () => Promise<RegistrationFormValues | null>;
}

interface UseLoginFormResult {
    formik: FormikProps<LoginFormValues>;
    handleFormValidation: () => Promise<LoginFormValues | null>;
}
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validateForm = () => {
    const useRegistrationForm = (): UseRegistrationFormResult => {
        {
            const validationSchema = Yup.object({
                firstname: Yup.string().required('First Name is required'),
                lastname: Yup.string().required('Last Name is required'),
                carNumber: Yup.string().required('Car Number Plate is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                contactNumber: Yup.string()
                    .required('Phine Number is required')
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .min(10, 'too short')
                    .max(10, 'too long'),
                password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must contain at least 8 characters'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
            });
            const formik = useFormik({
                initialValues: {
                    firstname: '',
                    lastname: '',
                    carNumber: '',
                    email: '',
                    contactNumber: '',
                    password: '',
                    confirmPassword: '',
                    // Initialize other fields here
                },
                validationSchema,
                onSubmit: () => {
                    // handleNextScreen();
                    // Do nothing here, onSubmit will be overridden in the component
                },
            });

            const handleValidation = async () => {
                const isValid = await formik.validateForm();
                return isValid ? formik.values : null;
            };

            return { formik, handleValidation };
        }
    };
    const useLoginForm = (): UseLoginFormResult => {
        {
            const validationSchema = Yup.object({
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must contain at least 8 characters'),
            });
            const formik = useFormik({
                initialValues: {
                    email: '',
                    password: '',

                    // Initialize other fields here
                },
                validationSchema,
                onSubmit: () => {
                    // handleNextScreen();
                    // Do nothing here, onSubmit will be overridden in the component
                },
            });

            const handleFormValidation = async () => {
                const isValid = await formik.validateForm();
                return isValid ? formik.values : null;
            };

            return { formik, handleFormValidation };
        }
    };
    return { useRegistrationForm, useLoginForm };
};
export default validateForm;
