interface AuthContextProps {
    isAuthenticated: boolean;
    user : User | null;
    accessToken: string | null;
    refreshToken: string | null;
    loading : boolean;
    login: (credentials : UserCredentials) => Promise<void>;
    logout: () => void;
}

type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    loading: boolean;
}

type User = {
    id : number;
    name : string;
    email : string;
    permissions? : Permissions
}

type Permissions = string[];

type UserCredentials = {
    email : string;
    password : string;
    rememberMe?: boolean;
}

type LoginResponse = {
    access_token : string,
    refresh_token: string
}

type ResetPasswordData = {
    email : string;
    password: string;
    password_confirmation: string;
    token : string
}
