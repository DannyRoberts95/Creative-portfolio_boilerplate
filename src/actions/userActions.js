import axios from "axios";

const username = "matiascorea";
// const username = "natashabertram";

export function getUserProfile() {
  return {
    type: "GET_USERPROFILE",
    payload: axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/${username}?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava`
      )
      .then(res => {
        return res.data.user;
      })
  };
}

export function getUserProjects() {
  return {
    type: "GET_USERPROJECTS",
    payload: axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/${username}/projects?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava`
      )
      .then(res => {
        return res.data.projects;
      })
  };
}
