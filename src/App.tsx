import "./style.css";
import { Header } from "./components/Header";
import { RegisterClientsModal } from "./components/RegisterClientsModal";
import { UpdateClientsModal } from "./components/UpdateClientsModal";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { usersData, deleteUser } = useUsers();

  return (
    <div className="container">
      <Header />
      <main>
        <RegisterClientsModal />
        <table className="records">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
              <th>Cidade</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
                <td>
                  <UpdateClientsModal
                    user={{
                      idUser: user.id,
                      nameUser: user.name,
                      emailUser: user.email,
                      phoneUser: user.phone,
                      cityUser: user.city,
                    }}
                  />
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                    type="button"
                    className="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export { App };
