import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom'
import DeliveryAddress from './DeliveryAddress'; 
import OrderSummary from './OrderSummary';
import Payment from './Payment';
import Completed from './Completed';


const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location=useLocation()
    const querySearch=new URLSearchParams(location.search)
    const step=Number(querySearch.get("step"))


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className='p-10 lg:px-20 mt-5'>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={step}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
        
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
        
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {/* <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button> */}
                {/* <Box sx={{ flex: '1 1 auto' }} />
        
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button> */}
              </Box>
            </React.Fragment>
          )}
        </Box>

        <div className='mt-10'>
          {step==1?<DeliveryAddress/>:step==2?<OrderSummary/>:step==3?<Payment/>:<Completed/>}
        </div>
    </div>
  );
}