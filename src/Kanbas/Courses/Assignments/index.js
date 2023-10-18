import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsHeader from "./AssignmentsHeader";
import {
	FaBook,
	FaCaretDown,
	FaCheckCircle,
	FaEllipsisV,
	FaGripVertical,
	FaPlus,
} from "react-icons/fa";
import "./index.css";

function Assignments() {
	const { courseId } = useParams();
	const assignments = db.assignments;
	const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
	return (
		<div>
			<AssignmentsHeader />
			<div className="list-group pt-2 modules">
				<div className="list-group-item list-group-item-dark py-3 d-flex flex-row align-items-center">
					<FaGripVertical />
					<FaCaretDown />
					ASSIGNMENTS
					<div className="ms-auto">
						<button type="button" className="btn btn-light btn-outline-secondary rounded-pill">
							<FaPlus /> 40% of Total
						</button>
						<FaCheckCircle className="text-success" />
						<FaCaretDown />
						<FaPlus />
						<FaEllipsisV />
					</div>
				</div>
				{courseAssignments.map((assignment) => (
					<Link
						key={assignment._id}
						to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
						className="list-group-item"
					>
						<div className="row align-items-center">
							<div className="col-auto">
								<span className="pe-3">
									<FaGripVertical />
								</span>
								<FaBook className="text-success" />
							</div>
							<div className="col">
								{assignment.title}
								<div>
									<small className="text-secondary">
										<b>Due </b>
										Sept 18, 2022 at 11:59pm | 100 pts
									</small>
								</div>
							</div>
							<div className="col-auto">
								<FaCheckCircle className="text-success" />
								<FaEllipsisV />
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Assignments;
