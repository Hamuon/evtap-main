import React, { useState } from 'react';
import LoginModal from './molecules/modals/LoginModal';
import OtpModal from './molecules/modals/OtpModal';
import CompleteModal from './molecules/modals/CompleteModal';
const StepForm = () => {

    const [phone, setPhone] = useState("")
    const [step, setStep] = useState(1)

    const nextStep = () => {

        setStep(prevStep => prevStep + 1)
    };

    const prevStep = () => {

        setStep(prevStep => prevStep - 1)
    };


    switch (step) {
        case 1:
            return <LoginModal setPhone={setPhone} nextStep={nextStep} />;
        case 2:
            return <OtpModal setPhone={setPhone} phone={phone} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <CompleteModal />
        default:
            return <LoginModal nextStep={nextStep} />

    }
};

export default StepForm;