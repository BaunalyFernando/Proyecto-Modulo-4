export interface IProducts {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }
  
  export interface ICategorys {
    id: number;
    name: string;
  }

export interface ILoginPropsErrors {
    email: string;
    password: string
}

export interface ILoginProps {
  email: string;
  password: string
}

export interface IRegisterProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string
}

export interface IRegisterPropsErrors {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string
}