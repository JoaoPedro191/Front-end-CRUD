import { FormEvent, ReactNode, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { ChangeEvent } from "react";

interface UsersDataType {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
}

interface usersContextType {
  usersData: UsersDataType[];
  name: string;
  email: string;
  phone: string;
  city: string;
  handleNewName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewPhone: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewCity: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInfosInvalid: (event: ChangeEvent<HTMLInputElement>) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
  handlewithInfosUserEdit: ({
    name,
    email,
    phone,
    city,
  }: userEditDataType) => void;
  createUser: (event: FormEvent) => void;
  clearInputs: () => void;
}

interface UsersContextProviderProps {
  children: ReactNode;
}

interface userEditDataType {
  name: string;
  email: string;
  phone: string;
  city: string;
}

export const usersContext = createContext({} as usersContextType);

const UsersContextProvider = ({ children }: UsersContextProviderProps) => {
  const [usersData, setUsersData] = useState<UsersDataType[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const url = "https://back-end-crud.vercel.app/users";

  const createUser = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const verifyEmailExists = usersData.find((user) => user.email === email);
      if (!verifyEmailExists) {
        await axios.post(url, {
          name,
          email,
          phone,
          city,
        });
        await getUsers();
      } else {
        window.alert("email já cadastrado.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      setUsersData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id: string) => {
    try {
      await axios.put(`${url}/${id}`, {
        name,
        email,
        phone,
        city,
      });
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`${url}/${id}`);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    event.target.setCustomValidity("");
  };
  const handleNewEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    event.target.setCustomValidity("");
  };
  const handleNewPhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    event.target.setCustomValidity("");
  };
  const handleNewCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    event.target.setCustomValidity("");
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
  };

  const handlewithInfosUserEdit = ({
    name,
    email,
    phone,
    city,
  }: userEditDataType) => {
    setName(name);
    setEmail(email);
    setPhone(phone);
    setCity(city);
  };

  const handleInfosInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("campo inválido");
  };

  useEffect(() => {
    const handleWithDataOfUser = async () => {
      await getUsers();
    };
    handleWithDataOfUser();
  }, []);

  return (
    <usersContext.Provider
      value={{
        usersData,
        name,
        email,
        phone,
        city,
        createUser,
        clearInputs,
        handleNewName,
        handleNewEmail,
        handleNewPhone,
        handleNewCity,
        deleteUser,
        updateUser,
        handlewithInfosUserEdit,
        handleInfosInvalid,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};
export { UsersContextProvider };
