"use client";
import { register } from '@/helpers/auth.helper';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';

export const RegisterView = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-40 max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Register to MyStore!
                </h1>
                <Formik
                    initialValues={{ email: '', password: '', name: '', phone: '', address: '' }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        console.log("Botón presionado. Valores del formulario:", values);

                        try {
                            console.log(values);
                            await register(values);
                            alert("Se creo el usuario correctamente");
                            resetForm(); 
                        } catch (error) {
                            console.error("Error al enviar el formulario:", error);
                            alert("Hubo un error.");
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="email@email.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="address"
                                    placeholder="Dirección"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="381.."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="****"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        ¿Ya tienes una cuenta creada?{" "}
                        <Link href="/Login" className="text-blue-600 hover:underline">
                            Loguéate
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterView;
