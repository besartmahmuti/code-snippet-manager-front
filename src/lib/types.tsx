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
 export type DataType = {
    id: number;
    column1: string;
    column2: string;
    language: string;
  }
  export type ModalTypes={
    state: boolean,
    title: string,
    body: string,
    footer: React.ReactElement
  }
  
