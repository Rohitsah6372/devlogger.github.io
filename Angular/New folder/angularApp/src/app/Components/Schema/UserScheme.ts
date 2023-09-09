export interface UserSchema {
  firstname: string;
  lastname: string;
  age?: number;
  address: {
    street?: string;
    city?: string;
    state?: string;
  };
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
  showUserform?: boolean
}
