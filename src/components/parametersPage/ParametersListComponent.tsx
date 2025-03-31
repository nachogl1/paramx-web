import { useDeleteParameter } from "../../hooks/useDeleteParameter";
import { ParamUser } from "../../model/ParamUser";
import { TextParameter } from "../../model/TextParameter";

interface ParametersListComponentProps {
  parameters: TextParameter[];
  paramUser: ParamUser;
  loading: boolean;
  fetchTextParameters: (paramUserId: string) => void;
  error: string | null;
}

const ParametersListComponent = ({
  parameters,
  loading,
  paramUser,
  error,
  fetchTextParameters,
}: ParametersListComponentProps) => {
  const { deleteParameter } = useDeleteParameter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!parameters) return <p>Paramters not found</p>;

  const handleDelete = (id: string) => {
    deleteParameter(id).then(() => {
      fetchTextParameters(paramUser.id);
    });
  };

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

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(parameter.id)}
              >
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
