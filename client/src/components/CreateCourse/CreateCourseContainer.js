import { connect } from "react-redux";
import CreateCourse from "./CreateCourse";
import {
  createCourseSkeleton,
  resetCourseSkeletonCreator,
  loadCourseToEdit,
  resetCourseCreatorDashboard,
  editCourseTitle,
  editCourseDescription,
  toggleCoursePrivacy,
  editCourseImage,
  saveCourseChanges
} from "./../../redux/actionCreators/courseCreators";

const mapStateToProps = state => ({
  creatingCourseSkeleton: state.course.creatingCourseSkeleton,
  createdCourseSkeleton: state.course.createdCourseSkeleton,
  courseId: state.course.editingCourseId,
  userLoggedIn: state.user.userLoggedIn,
  JWT: state.user.authJWT,
  loadedCourseToEdit: state.course.loadedCourseToEdit,
  loadingCourseToEdit: state.course.loadingCourseToEdit,
  courseToEditTopLevel: state.course.courseToEditTopLevel,
  userMayNotViewCourse: state.course.userMayNotViewCourse
});

const mapDispatchToProps = dispatch => ({
  createCourseSkeleton: jwt => dispatch(createCourseSkeleton(jwt)),
  resetCourseSkeletonCreator: () => dispatch(resetCourseSkeletonCreator()),
  loadCourseToEdit: (courseId, JWT) =>
    dispatch(loadCourseToEdit(courseId, JWT)),
  resetDashboard: () => dispatch(resetCourseCreatorDashboard()),
  editCourseTitle: newTitle => dispatch(editCourseTitle(newTitle)),
  editCourseDescription: newDescription =>
    dispatch(editCourseDescription(newDescription)),
  toggleCoursePrivacy: () => dispatch(toggleCoursePrivacy()),
  editCourseImage: newImage => dispatch(editCourseImage(newImage)),
  saveCourseChanges: (courseId, JWT, courseEdit) =>
    dispatch(saveCourseChanges(courseId, JWT, courseEdit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCourse);
