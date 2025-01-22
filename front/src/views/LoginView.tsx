"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { validateLoginForm } from "@/helpers/validate";

export const LoginView = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Login to MyStore!
                </h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={validateLoginForm}
                    onSubmit={(values) => {
                        console.log("submit exitoso");
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
                        ¿No tienes todavía una cuenta?{" "}
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
