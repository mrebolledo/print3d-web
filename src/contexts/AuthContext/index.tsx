import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {fetchUserData, loginAPI, logoutAPI} from "@/services/Auth/userAPI"

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    user : null,
    accessToken : null,
    refreshToken : null,
    loading : false,
    login: async () => {},
    logout: () => {},
});

const AuthProvider = ({children} : {children : ReactNode}) => {
  const [authState, setAuthState] = useState<AuthState>({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      loading : true
  });

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        const getUserData = async (token: string) => {
            try {
                const data = await fetchUserData();
                setAuthState((prevState) => ({
                    ...prevState,
                    isAuthenticated: true,
                    user: data,
                    accessToken: token,
                    loading: false
                }));
            } catch (error) {
                console.error("Failed to fetch user data", error);
                // Optionally handle the error, e.g., remove the token if invalid
                localStorage.removeItem("accessToken");
                setAuthState((prevState) => ({
                    ...prevState,
                    isAuthenticated: false,
                    user: null,
                    accessToken: null,
                    loading: false
                }));
            }
        };

        if (accessToken) {
            getUserData(accessToken);
        } else {
            setAuthState({
                ...authState,
                loading : false
            });
        }
    }, []);

  const login =  async (credentials : UserCredentials) => {
      try {
          const data = await loginAPI(credentials);
          localStorage.setItem('accessToken', data.access_token)
          localStorage.setItem('refreshToken', data.refresh_token)
          const userData  = await fetchUserData();
          setAuthState({
              isAuthenticated: true,
              user: userData,
              accessToken : data.access_token,
              refreshToken : data.refresh_token,
              loading: false
          })
      } catch (err) {
          console.log(err)
      }
  }

  const logout = async () => {

      await logoutAPI().then((res) => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          setAuthState({
              isAuthenticated: false,
              user: null,
              accessToken: null,
              refreshToken: null,
              loading: false
          })
      });

  }

  return (
      <AuthContext.Provider value={{...authState, login, logout}}>
          {children}
      </AuthContext.Provider>
  );
};

const useAuth = () => {
    return useContext(AuthContext);
}

export {AuthContext, AuthProvider, useAuth};
