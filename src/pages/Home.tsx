import { useParamUser } from "../hooks/useParamUser";

const Home = () => {
  const { paramUser } = useParamUser();

  if (!paramUser) return <p>No user found</p>;

  return (
    <div>
      <h1>ParamUser Details</h1>
      <p>
        <strong>Name:</strong> {paramUser.firstName}
      </p>
      <p>
        <strong>Email:</strong> {paramUser.email}
      </p>

      <h2>Text Parameters</h2>
      <ul>
        {paramUser.parameters.map((param) => (
          <li key={param.id}>
            <strong>{param.name}:</strong> {param.valueParameter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
