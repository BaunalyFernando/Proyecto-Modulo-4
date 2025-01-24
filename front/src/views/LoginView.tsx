"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { validateLoginForm } from "@/helpers/validate";
import { login } from "@/helpers/auth.helper";
import { useAuth } from "@/context/Auth.Context";
import { useRouter } from "next/navigation";

export const LoginView = () => {
    const {userData, setUserData} = useAuth();
    const router = useRouter();

    interface LoginFormValues {
        email: string;
        password: string;
    } 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-65 max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Login to MyStore!
                </h1>
                <Formik<LoginFormValues>
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                        const errors: Partial<LoginFormValues> = {};
                        if (!values.email) {
                            errors.email = "El email es obligatorio.";
                        }
                        if (!values.password) {
                            errors.password = "La contraseña es obligatoria.";
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        console.log("Enviando datos:", values);
                        try {
                            const data = await login(values);
                            setUserData({token: data.token, user: data.user});
                            
                            alert("Inicio de sesión exitoso");
                            router.push("/");
                            
                        } catch (error) {
                            console.error("Error en el envío:", error);
                            alert("Error al iniciar sesión");
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
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
                        ¿No tienes una cuenta?{" "}
                        <Link href="/Register" className="text-blue-600 hover:underline">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginView;