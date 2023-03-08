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

 
 export interface DataType extends SnippetFormData {
    id: number;
  }
  export type ModalTypes={
    show: boolean,
    title: string,
    body: string,
    footer: React.ReactElement
  }
  export type AlertTypes= {
    state: boolean,
    title: string, 
    content:string,
    type: string
  }
 export  interface SnippetFormData {
    title: string;
    language: string;
    code: string;
  }
  
