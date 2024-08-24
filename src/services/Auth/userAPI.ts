import api from "@/utils/axios"

export const fetchUserData = async () => {
    try {
        const response = await api.get<User>("/me")
        return response.data
    } catch (err) {
        return Promise.reject(err);
    }
}

export const loginAPI = async (credentials : UserCredentials) => {
    try {
        const response = await api.post<LoginResponse>("/login", credentials)
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const logoutAPI = async () => {
    try {
        const response = await api.post<CommonResponse>("/logout")
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const forgotPasswordAPI = async (email : string) => {
    try {
        const response = await api.post<CommonResponse>("/forgot-password", {
            email : email
        })

        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const resetPasswordAPI = async (data : ResetPasswordData) => {
    try {
        const response = await api.post<CommonResponse>("/reset-password", data);
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}
