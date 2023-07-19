import { OrganizationChart } from "primereact/organizationchart";
import data from "./data/data.json";

const App = () => {
  const nodeTemplate = (node) => {
    node["children"] = node["SubNodes"];
    return <div className="node-template">{node.Value.Name}</div>;
  };

  return (
    <div className="organization-chart">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
};

export default App;
