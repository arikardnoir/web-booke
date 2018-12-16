export interface User {

  status: boolean;
  token: string;
  user: string[];

}

export interface user {

  id: Number;
  name_university: String;
  initials: String;
  fundation_date: Date;
  university_code: Number;
  city: String;
  province: String;
  image: String;
  email: String;
  created_at: Date;
  updated_at: Date;
  roles: String[];

}

export interface roles {

  id: Number;
  name: String;
  label: String;
  created_at: Date;
  updated_at: Date;
  pivot: String[];
  permissions: String[];

}

export interface permissions {

  id: Number;
  name: String;
  label: String;
  created_at: Date;
  updated_at: Date;
  pivot: String[];
}


export interface pivot {

  user_id: Number;
  role_id: Number;

}
