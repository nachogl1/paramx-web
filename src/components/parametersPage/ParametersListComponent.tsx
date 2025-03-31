import { useState } from "react";
import { useDeleteParameter } from "../../hooks/useDeleteParameter";
import { ParamUser } from "../../model/ParamUser";
import { TextParameter } from "../../model/TextParameter";
import UpdateTextParameterComponent from "./UpdateTextParameterComponent";

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
  const [editingId, setEditingId] = useState<string | null>(null);
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
            <li className="list-group-item m-1 d-flex flex-column">
              <div className=" d-flex justify-content-between align-items-center ">
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
                  className="btn btn-primary me-2 "
                  type="button"
                  id="button-addon2"
                  onClick={() =>
                    setEditingId(
                      editingId === parameter.id ? null : parameter.id
                    )
                  }
                >
                  {editingId === parameter.id ? "Cancel" : "Edit"}
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(parameter.id)}
                >
                  X
                </button>
              </div>
              <div className="ms-2 d-flex justify-content-center align-items-center ">
                {editingId === parameter.id && (
                  <div className="ms-2 d-flex justify-content-center align-items-center">
                    <UpdateTextParameterComponent
                      oldParam={parameter}
                      paramUser={paramUser}
                      fetchTextParameters={fetchTextParameters}
                    />
                  </div>
                )}
              </div>
            </li>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ParametersListComponent;
