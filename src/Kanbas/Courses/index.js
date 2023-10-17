import { FaBars } from "react-icons/fa";
import db from "../../Kanbas/Database";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./index.css";
import CourseNavigation from "./CourseNavigation.js";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";

function Courses() {
	const { courseId } = useParams();
	const course = db.courses.find((course) => course._id === courseId);
	return (
		<div className="container-fluid">
			<div className="courses-content">
				<div className="row courses-heading d-none d-sm-flex">
					<div className="col-1">
						<FaBars className="fs-3 text-danger" />
					</div>
					<div className="col-10">
						<nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<Link key={course._id} to="#" className="text-danger">
										{course.name}
									</Link>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Home
								</li>
							</ol>
						</nav>
					</div>
					<hr />
				</div>
				<div className="row">
					<CourseNavigation className="col-2 col-lg-2 d-none d-md-block" />

					<div>
						<div
							className="overflow-y-scroll position-fixed bottom-0 end-0"
							style={{
								left: "320px",
								top: "50px",
							}}
						>
							<Routes>
								<Route path="/" element={<Navigate to="Home" />} />
								<Route path="Home" element={<h1>Home</h1>} />
								<Route path="Modules" element={<h1>Modules</h1>} />
								<Route path="Assignments" element={<h1>Assignments</h1>} />
								<Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
								<Route path="Grades" element={<h1>Grades</h1>} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Courses;
