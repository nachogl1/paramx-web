import { useEffect } from "react";
import { ParamUser } from "../../model/ParamUser";
import { useFetchTextParameters } from "../../hooks/useFetchTextParameters";
import { useFetchParametersName } from "../../hooks/useFetchParametersName";
import AddTextParameterComponent from "../../components/parametersPage/addTextParameterComponent";
import ParametersListComponent from "../../components/parametersPage/ParametersListComponent";

interface ParametersPageProps {
  paramUser: ParamUser;
}

const ParametersPage = ({ paramUser }: ParametersPageProps) => {
  const { parameterNames, fetchParameterNames } = useFetchParametersName();
  const { parameters, loading, error, fetchTextParameters } =
    useFetchTextParameters();

  useEffect(() => {
    fetchTextParameters(paramUser.id);
    fetchParameterNames(paramUser.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramUser.id]);

  return (
    <div className="m-1">
      <AddTextParameterComponent
        paramUser={paramUser}
        parameterNames={parameterNames}
        fetchTextParameters={fetchTextParameters}
      ></AddTextParameterComponent>
      
      <ParametersListComponent
        parameters={parameters}
        loading={loading}
        error={error}
      ></ParametersListComponent>
    </div>
  );
};

export default ParametersPage;
