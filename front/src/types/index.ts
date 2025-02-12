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


export interface IUserSession {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        orders: [];
    };
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    userId: number;
}