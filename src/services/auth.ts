import api from "../configs/api";

export const sendOtp = async (phoneNumber: string) => {
  try {
    const response = api.get(
      `Authentication/send-code/phone-number=${phoneNumber}/`
    );

    return { response };
  } catch (err) {
    return { err };
  }
};

interface CheckOtpResponse {
  data: {
    token: string;
    user_type: string;
    signup_require: boolean;
  };
}

interface CheckOtpResult {
  response?: CheckOtpResponse;
  err?: any;
}

export const checkOtp = async (
  phoneNumber: string,
  verifyCode: string
): Promise<CheckOtpResult> => {
  try {
    const response = await api.post("Authentication/prove-auth-code/", {
      phone_number: phoneNumber,
      code: verifyCode,
    });
    return { response };
  } catch (err) {
    return { err };
  }
};
