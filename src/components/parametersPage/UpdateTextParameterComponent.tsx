import { useState } from "react";
import { ParamUser } from "../../model/ParamUser";
import { TextParameter } from "../../model/TextParameter";
import { toast } from "react-toastify";
import { useUpdateParameter } from "../../hooks/useUpdateParameter";

interface UpdateTextParameterComponentProps {
  oldParam: TextParameter;
  paramUser: ParamUser;
  fetchTextParameters: (paramUserId: string) => void;
}

const UpdateTextParameterComponent = ({
  paramUser,
  oldParam,
  fetchTextParameters,
}: UpdateTextParameterComponentProps) => {
  const [newParameter, setNewParameter] = useState<TextParameter>({...oldParam});
  const { updateParameters } = useUpdateParameter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewParameter({
      ...newParameter,
      valueParameter: event.target.value,
    } as TextParameter);
  };

  const handleUpdateParameter = () => {
    updateParameters({
      ...oldParam,
      valueParameter: newParameter?.valueParameter,
      date: newParameter?.date,
      paramUser: paramUser,
    } as TextParameter)
      .then(() => {
        toast("Parameter updated");
      })
      .finally(() => {
        setNewParameter({
          valueParameter: "",
          date: new Date(),
        } as TextParameter);

        fetchTextParameters(paramUser.id);
      });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewParameter({
      ...newParameter,
      date: event.target.value as unknown as Date,
    } as TextParameter);
  };

  return (
    <div className="d-flex justify-content-end ms-1 me-1 mt-2 mb-2">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type NEW value here"
          value={newParameter?.valueParameter}
          onChange={handleInputChange}
        />

        <input
          type="date"
          className="form-control"
          value={newParameter?.date.toString()}
          onChange={handleDateChange}
        />

        <button
          className="btn btn-primary"
          type="button"
          id="add-button"
          onClick={handleUpdateParameter}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateTextParameterComponent;
