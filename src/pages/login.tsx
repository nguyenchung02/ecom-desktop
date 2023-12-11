import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";



const Login = () => {
    // const [errorMessage, setErrorMessage] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const onSubmitFn = () => {
        setIsProcessing(true)
    }


    const formik = useFormik({
        initialValues: {
            phone: '',
        },

        validationSchema: Yup.object({
            phone: Yup.string().required("Required")
                .min(10, 'Số điện thoại của bạn không đúng định dạng')
                .max(11, 'Số điện thoại của bạn không đúng định dạng')
                      
        }),

        onSubmit: (values) => {
            alert('Số điện thoại chưa được đăng ký')
        },
    })

    return (
        <div>
            <div>
                <header className="flex justify-center items-center py-[15px]">
                    <nav className="min-w-[240px] flex justify-center">
                        <a href="#">
                            <Image
                            className="max-h-[78px]"
                            src={'https://ecom-cdn-uat.ionah.com/2023/11/17/170020381677418981378.svg'}
                            alt="logo-header"
                            width={111}
                            height={78}
                            />
                        </a>
                    </nav>
                    <hr className="before:border before:solid before:w-full before:max-w-full before:right-0 before:absolute before:border-grey-100 before:top-[100px]">
                    </hr>
                </header>
                <main className="flex max-w-[1200px] mx-auto items-center justify-between">
                    {/* form login */}
                    <div className="flex flex-col flex-2">
                        <h1 className="text-[32px] leading-10 font-bold text-opacity-100 font-mulish">Đăng nhập tài khoản</h1>
                        <div className="mt-10">
                            <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="" className="text-base font-bold mb-2 font-mulish">Số điện thoại</label>
                                    <input
                                        type="text" 
                                        name="phone"
                                        value={formik.values.phone.trim()}
                                        onChange={e => {
                                            formik.handleChange(
                                                { target: {
                                                value: e.target.value.trim().replace(/\D/, ''),
                                                name: 'phone',
                                                },
                                            })
                                        }}
                                        className={clsx(isProcessing && formik.errors.phone && 
                                            'border border-red-600', "p-4 h-12 border border-solid rounded-[4px] border-gray-500 w-[390px] w-full min-w-[390px] placeholder:text-dark-400 focus:outline-none text-left text-base " 
                                        )}
                                        placeholder="Nhập số điện thoại" 
                                    />
                                    {
                                        isProcessing && formik.errors.phone && (
                                            <div className="leading-6 text-[14px] font-normal text-red-600 pt-3">{formik.errors.phone}</div>
                                        )
                                    }
                                </div>
                                <div className="mt-[24px]">
                                    <button 
                                        onClick={onSubmitFn}
                                        type="submit" 
                                        className={clsx(formik.dirty && 'text-white bg-red-500', "w-full h-12 p-[10px] rounded text-[rgba(0,0,0,.25)] bg-[rgba(237,237,237,1)] uppercase")}
                                    >Nhập mã otp</button>
                                </div>
                            </form>
                        </div>
                        <span className="mt-8 w-full text-center">
                            <span className="text-[rgba(48,53,56,1)] opacity-70">Bạn mới biết đến Pico Retail? </span>
                            <a className="text-blue-500 font-normal text-base" href="">Đăng ký ngay</a>
                        </span>
                    </div>
                    {/*  */}
                    <div className="min-h-[700px] min-w-[538px] py-[60px]">
                        <div>
                            <a href="#">
                                <Image 
                                src={'https://ecom-cdn-uat.ionah.com/2023/11/20/170045564510494938592.png'}
                                alt="img-pico"
                                width={600}
                                height={800}
                                />
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Login;
