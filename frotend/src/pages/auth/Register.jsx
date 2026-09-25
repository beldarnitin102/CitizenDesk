import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import RegisterForm from "../../components/auth/RegisterForm";

import {
  sendOTP,
  registerUser,
} from "../../services/operations/authAPI";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [otpLoading, setOtpLoading] =
    useState(false);

  // ==========================
  // SEND OTP
  // ==========================

  const handleSendOTP = async (
    email
  ) => {
    setOtpLoading(true);

    try {
      await sendOTP(email);
    } catch (error) {
      toast.error(
        error?.response?.data
          ?.message ||
          "Failed to send OTP"
      );
    } finally {
      setOtpLoading(false);
    }
  };

  // ==========================
  // REGISTER
  // ==========================

  const handleRegister =
    async (formData) => {
      setLoading(true);

      try {
        await registerUser({
          name: formData.name,
          email: formData.email,
          password:
            formData.password,
          phone: formData.phone,
          otp: formData.otp,
        });

        toast.success(
          "Account Created Successfully"
        );

        navigate("/login");
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Registration Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <RegisterForm
      onSendOTP={
        handleSendOTP
      }
      onSubmit={
        handleRegister
      }
      loading={loading}
      otpLoading={otpLoading}
    />
  );
}

export default Register;