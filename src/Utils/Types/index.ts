export interface ButtonProps {
  color: string | null;
  size: string | number;
  padding: string | number;
  width: string | number;
  height: string | number;
  bg: string | null;
  radius: string | number;
}

export interface ContainerProps {
  padding: string | number;
  width: string | number;
  height: string | number;
  bg: string | null;
  justify: string | null;
  align: string | null;
  direction: any;
  margin: string | number;
  marginTop: string | number;
  marginRight: string | number;
  marginLeft: string | number;
  marginBottom: string | number;
  flex: string | number,
  position: string | any,
  top: string | any,
  bottom: string | any,
  left: string | any,
  right: string | any,
  opacity: number | string,
  zIndex: number,
  flexWrap:string|any
}

export interface TextProps {
  color: string;
  padding: string | number;
  size: string | number;
  weight: string;
  justify: string | any;
}

export interface InputProps {
  color: string | null;
  size: string | number;
  padding: string | number;
  width: string | number;
  height: string | number;
  bg: string | null;
  radius: string | number;
  borderWidth: string;
  borderType: string;
  borderColor: string;
}

export interface ImageProps {
  padding: string | number;
  width: string | number;
  height: string | number;
  radius: string | number;
}

export interface DividerProps {
  width: string | number;
  height: string | number;
  spacing: string | number;
  thickness: string | any;
  direction: string | number;
  color: string | number;
}
export interface GetRequestTypes {
  Full_name: string,
  Gender: string,
  Salary: string,
  Birth_date: string
}
export interface ResponseDataTypes {
  _id:string,
  name: string,
  gender: string,
  salary: string,
  birth_date: string,
  createdAt: string,
}