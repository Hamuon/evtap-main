import React, { useState } from 'react';
import SignUpModal from './molecules/modals/SignupModal';
import OtpModal from './molecules/modals/OtpModal';
const SignUpStepForm = ({ setShowSignup }) => {

    const [step, setStep] = useState(1)

    const nextStep = () => {

        setStep(prevStep => prevStep + 1)
    };

    const prevStep = () => {

        setStep(prevStep => prevStep - 1)
    };


    switch (step) {
        case 1:
            return <SignUpModal setShowSignup={setShowSignup} nextStep={nextStep} />;
        case 2:
            return <OtpModal setShowSignup={setShowSignup} nextStep={nextStep} prevStep={prevStep} />;
        default:
            return <SignUpModal setShowSignup={setShowSignup} nextStep={nextStep} />

    }
};

export default SignUpStepForm;