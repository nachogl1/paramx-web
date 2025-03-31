import { useState } from "react";
import { ParamUser } from "../../model/ParamUser";
import { TextParameter } from "../../model/TextParameter";
import { usePostParameter } from "../../hooks/usePostParameter";
import { toast } from "react-toastify";
import { TextParameterName } from "../../model/TextParameterName";

interface AddTextParameterComponentProps {
  paramUser: ParamUser;
  parameterNames: TextParameterName[];
  fetchTextParameters: (paramUserId: string) => void;
}

const AddTextParameterComponent = ({
  paramUser,
  parameterNames,
  fetchTextParameters,
}: AddTextParameterComponentProps) => {
  const [newParameter, setNewParameter] = useState<TextParameter | null>(null);
  const { postParameters } = usePostParameter();
  const [dropdownButtonText, setDropdownButtonText] = useState<string>(
    "Select parameter type"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewParameter({
      ...newParameter,
      valueParameter: event.target.value,
    } as TextParameter);
  };

  const handleDropdownChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const selectedItem = event.currentTarget.textContent || "";

    setDropdownButtonText(selectedItem);

    setNewParameter({
      ...newParameter,
      name: selectedItem,
    } as TextParameter);
  };

  const handleAddParameter = () => {
    postParameters({
      ...newParameter,
      date: new Date(),
      paramUser: paramUser,
    } as TextParameter)
      .then(() => {
        toast("Parameter added");
      })
      .finally(() => {
        setNewParameter({
          valueParameter: "",
          name: "",
        } as TextParameter);

        fetchTextParameters(paramUser.id);
      });
  };

  return (
    <div className="d-flex justify-content-end ms-1 me-1 mt-2 mb-2">
      <div className="input-group mb-3">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {dropdownButtonText}
          </button>
          <ul className="dropdown-menu">
            {parameterNames?.map((parameterName:TextParameterName , index) => (
              <li key={`names-${index}`}>
                <a className="dropdown-item" onClick={handleDropdownChange}>
                  {parameterName.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Type value here"
          value={newParameter?.valueParameter}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary"
          type="button"
          id="add-button"
          onClick={handleAddParameter}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTextParameterComponent;
