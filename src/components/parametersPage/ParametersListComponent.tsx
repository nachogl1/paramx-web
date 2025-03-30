import { TextParameter } from "../../model/TextParameter";

interface ParametersListComponentProps {
  parameters: TextParameter[];
  loading: boolean;
  error: string | null;
}

const ParametersListComponent = ({
  parameters,
  loading,
  error,
}: ParametersListComponentProps) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!parameters) return <p>Paramters not found</p>;

  return (
    <div>
      {parameters.map((parameter, index) => (
        <div key={`parameters-${index}`}>
          <ol className="list-group list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center ">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{parameter.name}</div>
                <div>{parameter.valueParameter}</div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {parameter.date.toString().split("T")[0]}
                </div>
              </div>
              <button
                className="btn btn-primary me-2 disabled"
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
    </div>
  );
};

export default ParametersListComponent;
