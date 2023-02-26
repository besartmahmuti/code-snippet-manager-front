export type LoginFormValues = {
    username: string;
    password: string;
  };
export type FormProps = {
    usernameLabel?: string;
    passwordLabel: string;
    title: string;
    fullNameLabel?: string;
    emailLabel: string 
    isRegistering: boolean
  }
  export interface authType {
    isLoggedIn: boolean,
    username: string;
  }
  
