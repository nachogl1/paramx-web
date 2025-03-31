import { useState } from "react";
import { ParamUser } from "../../model/ParamUser";
import { toast } from "react-toastify";
import { TextParameterName } from "../../model/TextParameterName";
import { usePostParameterName } from "../../hooks/usePostParameterName";

interface AddTextParameterNameComponentProps {
  paramUser: ParamUser;
  fetchTextParametersNames: (paramUserId: string) => void;
}

const AddTextParameterNameComponent = ({
  paramUser,
  fetchTextParametersNames,
}: AddTextParameterNameComponentProps) => {
  const [newParameterName, setNewParameterName] =
    useState<TextParameterName | null>(null);

  const { postParametersName } = usePostParameterName();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewParameterName({
      name: event.target.value,
    } as TextParameterName);
  };

  const handleAddParameterName = () => {
    postParametersName({
      ...newParameterName,
      paramUser: paramUser,
    } as TextParameterName)
      .then(() => {
        toast("Parameter name added");
      })
      .finally(() => {
        setNewParameterName({
          name: "",
        } as TextParameterName);
        fetchTextParametersNames(paramUser.id);
      });
  };

  return (
    <div className="d-flex justify-content-end ms-1 me-1 mt-2 mb-2">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type value here"
          value={newParameterName?.name}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary"
          type="button"
          id="add-button"
          onClick={handleAddParameterName}
        >
          Add parameter name
        </button>
      </div>
    </div>
  );
};

export default AddTextParameterNameComponent;
