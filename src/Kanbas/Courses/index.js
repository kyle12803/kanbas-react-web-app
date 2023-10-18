import { FaBars, FaGlasses } from "react-icons/fa";
import db from "../../Kanbas/Database";
import "./index.css";
import CourseNavigation from "./CourseNavigation.js";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";

function Courses() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const course = db.courses.find((course) => course._id === courseId);
	return (
		<div className="container-fluid">
			<div className="courses-content">
				<div className="row courses-heading d-none d-sm-flex">
					<div className="col-1">
						<FaBars className="fs-3 text-danger" />
					</div>
					<div className="col-9">
						<nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
							<ol class="breadcrumb fs-5">
								<li class="breadcrumb-item">
									<Link key={course._id} to="#" className="text-danger">
										{course.name}
									</Link>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									{decodeURIComponent(pathname.substring(pathname.lastIndexOf("/") + 1))}
								</li>
							</ol>
						</nav>
					</div>
					<div class="col-2">
						<button
							type="button"
							class="btn btn-light btn-outline-secondary text-nowrap d-flex align-items-center"
						>
							<FaGlasses />
							Student View
						</button>
					</div>
					<hr />
				</div>
				<div className="row">
					<div className="col-2 col-lg-2 d-none d-md-block">
						<CourseNavigation />
					</div>
					<div className="col-10">
						<Routes>
							<Route path="/" element={<Navigate to="Home" />} />
							<Route path="Home" element={<Home />} />
							<Route path="Modules" element={<Modules />} />
							<Route path="Assignments" element={<h1>Assignments</h1>} />
							<Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
							<Route path="Grades" element={<h1>Grades</h1>} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Courses;
