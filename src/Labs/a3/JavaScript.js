import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructuring";
import FilterFunction from "./FilterFunction";
import FunctionDestructing from "./FunctionDestructuring";
import House from "./House";
import IfElse from "./IfElse";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
	console.log("Hello World!");
	return (
		<div>
			<h1>JavaScript</h1>
			<VariablesAndConstants />
			<VariableTypes />
			<BooleanVariables />
			<IfElse />
			<TernaryOperator />
			<WorkingWithFunctions />
			<WorkingWithArrays />
			<FilterFunction />
			<TemplateLiterals />
			<House />
			<Spread />
			<Destructing />
			<FunctionDestructing />
		</div>
	);
}
export default JavaScript;
