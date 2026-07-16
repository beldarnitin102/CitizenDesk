import OTPInput from "react-otp-input";

const OTPField = ({
  otp,
  setOtp,
}) => {
  return (
    <div className="flex justify-center">
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        shouldAutoFocus
        renderSeparator={<span className="w-3"></span>}
        renderInput={(props) => (
          <input
            {...props}
            className="
            !h-14
            !w-14
            rounded-xl
            border
            border-[var(--border)]
            text-xl
            font-semibold
            outline-none
            transition
            focus:border-[var(--primary)]
            focus:ring-4
            focus:ring-blue-100
            "
          />
        )}
      />
    </div>
  );
};

export default OTPField;