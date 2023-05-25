import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useUsers } from "../../hooks/useUsers";
import "./style.css";
import { FormEvent, useState } from "react";

const RegisterClientsModal = () => {
  const [open, setOpen] = useState(false);

  const {
    handleNewName,
    handleNewEmail,
    handleNewPhone,
    handleNewCity,
    name,
    email,
    city,
    phone,
    createUser,
    handleInfosInvalid,
    clearInputs,
  } = useUsers();

  const handleUserCreationAndModalChange = (event: FormEvent) => {
    createUser(event);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className="mobile-button">
        <button type="button" onClick={clearInputs} className="Button blue">
          Cadastrar Cliente
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <form onSubmit={handleUserCreationAndModalChange}>
            <Dialog.Title className="DialogTitle">
              Cadastro de Cliente
            </Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Preencha o formulário abaixo.
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
                required={true}
                onInvalid={handleInfosInvalid}
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
                required={true}
                onInvalid={handleInfosInvalid}
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
                required={true}
                onInvalid={handleInfosInvalid}
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
                required={true}
                onInvalid={handleInfosInvalid}
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" className="Button green">
                Salvar alterações
              </button>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { RegisterClientsModal };
