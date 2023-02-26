export type LoginFormValues = {
    username: string;
    password: string;
  };
export type FormProps = {
    onSubmit: (formData: LoginFormValues) => void;
    usernameLabel: string;
    passwordLabel: string;
    title: string;
  }
