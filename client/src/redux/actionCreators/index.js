//actions
export const RESET_PAGE = {
  HOMESCREEN: "RESET_HOMESCREEN",
  COURSE_SKELETON_CREATOR: "RESET_COURSE_SKELETON_CREATOR",
  COURSE_CREATOR_DASHBOARD: "RESET_COURSE_CREATOR_DASHBOARD"
};

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const TOGGLE_PROFILE_OPTIONS = "TOGGLE_PROFILE_OPTIONS";

export const SIGNING_IN = "SIGNING_IN";

export const USER_SIGNED_IN = "USER_SIGNED_IN";

export const LOGOUT_USER = "LOGOUT_USER";

export const TOGGLE_CREATING_ACCOUNT = "TOGGLE_CREATING_ACCOUNT";

export const CREATE_USER_ERRORS = {
  PASSWORD_MISMATCH: "CREATE_USER_PASSWORD_MISMATCH",
  INVALID_USERNAME: "CREATE_USER_INVALID_USERNAME",
  USERNAME_TAKEN: "CREATE_USER_USERNAME_TAKEN"
};

export const LOADING_COURSES = "LOADING_COURSES";

export const LOADED_COURSES = "LOADED_COURSES";

export const CREATE_COURSE_SKELETON = {
  CREATING: "CREATING_COURSE_SKELETON",
  CREATED: "CREATED_COURSE_SKELETON"
};

export const LOAD_COURSE_TO_EDIT = {
  LOADING: "LOADING_COURSE_TO_EDIT",
  LOADED: "LOADED_COURSE_TO_EDIT",
  BAD_CREDENTIALS: "LOADING_COURSE_FAILED_DUE_TO_BAD_CREDENTIALS"
};

export const EDIT_COURSE = {
  TITLE: "EDIT_COURSE_TITLE",
  DESCRIPTION: "EDIT_COURSE_DESCRIPTION",
  PRIVACY: "TOGGLE_COURSE_PRIVACY",
  IMAGE: "EDIT_COURSE_IMAGE_URL",
  ADDED_SECTION: "ADDED_NEW_SECTION_TO_COURSE"
};

export const LOAD_SECTIONS = {
  LOADING: "LOADING_COURSE_SECTIONS",
  LOADED: "LOADED_COURSE_SECTIONS",
  LOADING_SECTION_CONTENT: "LOADING_SECTION_CONTENT",
  LOADED_SECTION_CONTENT: "LOADED_SECTION_CONTENT"
};

export const EDITABLE_SECTION = {
  TOGGLE_SECTION: "TOGGLE_EDITABLE_SECTION_EXPANDED",
  UPDATING_DESCRIPTION: "UPDATING_SECTION_DESCRIPTION",
  UPDATED_DESCRIPTION: "UPDATED_SECTION_DESCRIPTION",
  CREATING_NEW_PAGE: "CREATING_NEW_PAGE",
  CREATED_NEW_PAGE: "CREATED_NEW_PAGE"
};

export const GET_PAGE_CONTENT = {
  GETTING_CONTENT: "GETTING_PAGE_CONTENT",
  GOT_CONTENT: "GOT_PAGE_CONTENT"
};

export const EDIT_PAGE = {
  EDITING_PAGE_TITLE: "EDITING_PAGE_TITLE",
  EDITED_PAGE_TITLE: "EDITED_PAGE_TITLE",
  EDITING_DESCRIPTION: "EDITING_PAGE_DESCRIPTION",
  EDITED_DESCRIPTION: "EDITED_PAGE_DESCRIPTION",
  ADDING_ELEMENT: "ADDING_ELEMENT",
  ADDED_ELEMENT: "ADDED_ELEMENT",
  CHANGE_CONTENT_TYPE: "CHANGE_TYPE_OF_CONTENT_TO_ADD_TO_PAGE"
};

export const VIEW_COURSE = {
  GETTING_SECTIONS: "GETTING_SECTIONS_TO_VIEW",
  GOT_SECTIONS: "GOT_SECTIONS_TO_VIEW",
  EXPAND_SECTION: "EXPAND_VIEWING_SECTION",
  LOADING_PAGES_TO_VIEW: "LOADING_PAGES_TO_VIEW",
  LOADED_PAGES_TO_VIEW: "LOADED_PAGES_TO_VIEW"
};
