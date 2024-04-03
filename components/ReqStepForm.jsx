"use client"
import React, { useState } from 'react';
import RequestModal from './molecules/modals/RequestModal';
import InvoiceModal from './molecules/modals/InvoiceModal';
const ReqStepModal = () => {

    const [step, setStep] = useState(1)
    const [reqData, setReqData] = useState(null)

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1)
    };


    switch (step) {
        case 1:
            return <RequestModal setReqData={setReqData} nextStep={nextStep} />;
        case 2:
            return <InvoiceModal reqData={reqData} nextStep={nextStep} prevStep={prevStep} />;
        default:
            return <RequestModal nextStep={nextStep} />

    }
};

export default ReqStepModal;