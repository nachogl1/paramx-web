import { useEffect } from "react";
import { ParamUser } from "../../model/ParamUser";
import { useFetchTextParameters } from "../../hooks/useFetchTextParameters";
import { useFetchParametersName } from "../../hooks/useFetchParametersName";
import ParametersListComponent from "../../components/parametersPage/ParametersListComponent";
import AddTextParameterComponent from "../../components/parametersPage/AddTextParameterComponent";
import AddTextParameterNameComponent from "../../components/parametersPage/AddTextParameterNameComponent";

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
      <AddTextParameterNameComponent
        paramUser={paramUser}
        fetchTextParametersNames={fetchParameterNames}
      ></AddTextParameterNameComponent>

      <AddTextParameterComponent
        paramUser={paramUser}
        parameterNames={parameterNames}
        fetchTextParameters={fetchTextParameters}
      ></AddTextParameterComponent>

      <ParametersListComponent
        paramUser={paramUser}
        fetchTextParameters={fetchTextParameters}
        parameters={parameters}
        loading={loading}
        error={error}
      ></ParametersListComponent>
    </div>
  );
};

export default ParametersPage;
