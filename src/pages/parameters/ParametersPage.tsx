import { useState } from "react";
import { useParameters } from "../../hooks/useParameters";
import { ParamUser } from "../../model/ParamUser";
import { useParametersName } from "../../hooks/useParametersName";

interface ParametersPageProps {
  paramUser: ParamUser;
}

const ParametersPage = ({ paramUser }: ParametersPageProps) => {
  const [userId] = useState(paramUser.id);
  const { parameters, loading, error } = useParameters(userId);
  const { parameterNames } = useParametersName(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!parameters) return <p>User not found.</p>;

  return (
    <div className="m-1">
      <div className="d-flex justify-content-end ms-1 me-1 mt-2 mb-2">
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select parameter type
          </button>
          <ul className="dropdown-menu">
            {parameterNames?.map((name: string, index) => (
              <li key={`names-${index}`}>
                <a className="dropdown-item" href="#">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="form-control"
            placeholder="Type value here"
            aria-label="Text input with dropdown button"
          />

          <button className="btn btn-primary" type="button" id="button-addon2">
            Add
          </button>
        </div>
      </div>

      <div>
        {parameters.map((parameter, index) => (
          <div key={`parameters-${index}`}>
            <ol className="list-group list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{parameter.name}</div>
                  {parameter.valueParameter}
                </div>
                <button
                  className="btn btn-primary me-2"
                  type="button"
                  id="button-addon2"
                >
                  Edit
                </button>

                <button type="button" className="btn btn-danger disabled">
                  X
                </button>
              </li>
            </ol>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default ParametersPage;
