import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { InputField } from '../components/InputFields';
import RadioButton from '../components/RadioInput';
import { useTheme } from '../theme/themeContext';

export const Auth = () => {
    const { theme, setAppTheme } = useTheme();
    const { colors } = theme
    const [isReg, setIsReg] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [gender, setGender] = useState("");
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = useCallback((e, setState) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    }, []);

    const registerSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(registerData);
    }, [registerData]);

    const loginSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(loginData);
    }, [loginData]);


    useEffect(() => {
        setAppTheme(gender || "boy");
    }, [gender]);

    return (
        <div className={`flex items-center justify-between m-auto h-screen p-10 `} style={{ backgroundColor: colors.primary }}>
            <div className="h-128 w-[50%] flex flex-col gap-8 justify-center items-center">
                <h1 className={`font-extrabold text-8xl`}>Blissify</h1>
                <h3 className={`font-semibold text-xl tracking-widest`}>Connect, Create, Celebrate: Blissify Your Social Experience!</h3>
            </div>
            {!isReg ? <div className={`flex items-center justify-between m-auto h-full p-10 `} >
                <form onSubmit={loginSubmit}>
                    <div className={`w-auto mx-auto flex flex-col items-center gap-4 p-10 rounded-lg shadow-2xl bg-transparent backdrop-blur-sm`} style={{ backgroundColor: colors.background }}>
                        <h2 className="font-bold text-lg">Welcome back</h2>
                        <InputField placeholder="Email" name="email" value={loginData.email} onChange={(e) => handleChange(e, setLoginData)} />
                        <InputField placeholder="Password" name="password" value={loginData.password} onChange={(e) => handleChange(e, setLoginData)} type="password" />
                        <Button label="Login" onClick={() => console.log(loginData)} />
                        <p className="underline underline-offset-4 cursor-pointer transition-all duration-700 text-lg tracking-wide"
                            style={{ color: colors.secondary }} onClick={() => setIsReg(!isReg)}>
                            I want to join Blissify
                        </p>
                    </div>
                </form>
            </div>
                : <div className={`flex items-center justify-between m-auto h-full p-10 `} >
                    <form onSubmit={registerSubmit}>
                        <div className={`w-auto mx-auto flex flex-col items-center gap-4 p-10 rounded-lg shadow-2xl bg-transparent backdrop-blur-sm`} style={{ backgroundColor: colors.background }}>
                            <h2 className="font-bold text-lg">Register here</h2>
                            <InputField placeholder="Name" value={registerData.name} name="name" onChange={(e) => handleChange(e, setRegisterData)} />
                            <InputField placeholder="Email" value={registerData.email} name="email" onChange={(e) => handleChange(e, setRegisterData)} />
                            <InputField placeholder="Password" type="password" name="password" value={registerData.password} onChange={(e) => handleChange(e, setRegisterData)} />
                            <div className="w-full flex justify-start gap-5">
                                <RadioButton label="Boy" checked={gender === 'boy'} value="boy" onChange={() => setGender('boy')} />
                                <RadioButton label="Girl" checked={gender === 'girl'} value="girl" onChange={() => setGender('girl')} />
                            </div>
                            <Button label="Register" onClick={() => console.log(registerData)} />
                            <p className={`underline underline-offset-4 cursor-pointer transition-all duration-700 text-lg tracking-wide `}
                                style={{ color: colors.secondary }} onClick={() => setIsReg(!isReg)}>
                                I am a Blissify member
                            </p>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};
