import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useUsers } from "../../hooks/useUsers";
import "./style.css";

interface updateClientsModalProps {
  user: {
    idUser: string;
    nameUser: string;
    emailUser: string;
    phoneUser: string;
    cityUser: string;
  };
}

const UpdateClientsModal = ({ user }: updateClientsModalProps) => {
  const {
    handleNewName,
    handleNewEmail,
    handleNewPhone,
    handleNewCity,
    name,
    email,
    phone,
    city,
    updateUser,
    handlewithInfosUserEdit,
  } = useUsers();

  const handleUserUpdate = () => {
    updateUser(user.idUser);
  };

  const handleWithDataOfUserEdit = () => {
    handlewithInfosUserEdit({
      name: user.nameUser,
      email: user.emailUser,
      phone: user.phoneUser,
      city: user.cityUser,
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button onClick={handleWithDataOfUserEdit} className="Button LimeGreen">
          Editar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Editar Cliente</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Altere as informações do cliente no formulário abaixo
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Nome
            </label>
            <input
              className="Input"
              id="name"
              onChange={handleNewName}
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="email">
              E-mail
            </label>
            <input
              className="Input"
              id="email"
              onChange={handleNewEmail}
              defaultValue={email}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="phone">
              Celular
            </label>
            <input
              className="Input"
              id="phone"
              onChange={handleNewPhone}
              defaultValue={phone}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="city">
              Cidade
            </label>
            <input
              className="Input"
              id="city"
              onChange={handleNewCity}
              defaultValue={city}
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                onClick={handleUserUpdate}
                type="submit"
                className="Button green"
              >
                Salvar alterações
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { UpdateClientsModal };
