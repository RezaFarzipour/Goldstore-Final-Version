import api from "../configs/api";


export const sendOtp = async (phone: string) => {

  try {
    const response = await api.get(
      `Authentication/send-code/phone-number=${phone}/`
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
  status:number
}

interface CheckOtpResult {
  response?: CheckOtpResponse;
  err?: any;
}

export const checkOtp = async (
  phoneNumber: string | null,
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



export const signupinfo = async(inputInfo:object) => {
  return await api.post("Authentication/sign-up/",{
    ...inputInfo,
 
  })
}
