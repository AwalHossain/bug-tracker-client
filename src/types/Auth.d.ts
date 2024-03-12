export interface IUser {
  email: string | undefined;
  name?: string | undefined;
  password: string | undefined;
}

export interface IAuthContext {
  user: any;
  loading: boolean;
  authLoading: boolean;
  error: null;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
  setError: React.Dispatch<React.SetStateAction<{}>>;
  login: (data: IUser) => void;
  logout: () => void;
  register: (data: IUser) => void;
}
