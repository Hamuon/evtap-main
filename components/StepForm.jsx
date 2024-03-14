import React, { useState } from 'react';
import LoginModal from './molecules/modals/LoginModal';
import OtpModal from './molecules/modals/OtpModal';
const StepForm = ({ setShowLogin }) => {

    const [step, setStep] = useState(1)

    const nextStep = () => {

        setStep(prevStep => prevStep + 1)
    };

    const prevStep = () => {

        setStep(prevStep => prevStep - 1)
    };


    switch (step) {
        case 1:
            return <LoginModal setShowLogin={setShowLogin} nextStep={nextStep} />;
        case 2:
            return <OtpModal setShowLogin={setShowLogin} nextStep={nextStep} prevStep={prevStep} />;
        default:
            return <LoginModal setShowLogin={setShowLogin} nextStep={nextStep} />

    }
};

export default StepForm;