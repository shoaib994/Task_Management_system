import axios from "axios";
import { server } from "../store";
import { useNavigate } from "react-router-dom";
const token = `Bearer ${localStorage.getItem("token")}`;

export const login = (user_name, password) => async (dispatch) => {
  try {
    dispatch({
      type: "logingRequest",
    });
    let { data } = await axios.post(
      `${server}/login`,
      { user_name: user_name, password: password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    localStorage.setItem("user", JSON.stringify(data?.user[0]));
    // navigate('/providers')
    dispatch({
      type: "loginSuccess",
      message: data?.message,
      payload: data?.user[0],
    });
  } catch (err) {
    console.log(err?.response?.data?.error);
    dispatch({
      type: "loginFailure",
      payload: err?.response?.data?.error,
    });
  }
};
export const SignupAction =
  (user_name, password, selectedOption) => async (dispatch) => {
    try {
      const group_name = selectedOption?.name;
      const group_id = selectedOption?.id;
      dispatch({
        type: "signupRequest",
      });
      let { data } = await axios.post(
        `${server}/register`,
        { user_name: user_name, password: password, group_id, group_name },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // navigate('/providers')
      dispatch({
        type: "signupSuccess",
        message: data?.message,
      });
    } catch (err) {
      console.log(err?.response?.data?.message);
      dispatch({
        type: "signupFailure",
        payload: err?.response?.data?.error,
      });
    }
  };

export const getAllTasks = () => async (dispatch) => {
  try {
    const getUser = localStorage.getItem("user");
    console.log("getUser",getUser)
    if (getUser) {
      const user=JSON.parse(getUser)
      dispatch({ type: "getAllTaskRequest" });

      const { data } = await axios.get(`${server}/task/${user?.group_id}`, {
        headers: { Authorization: token, "Content-Type": "application/json" },
      });
     
      dispatch({
        type: "getAllTaskSuccess",
        payload: data.tasks,
      });
    }
  } catch (err) {
    dispatch({
      type: "getAllTaskFail",
      payload: err.response.data.error
    });
    console.error(err.response.data.message);
  }
};
export const updateTaskStatus = (id,status) => async (dispatch) => {
  try {
    const getUser = localStorage.getItem("user");
    console.log("getUser",getUser)
    if (getUser) {
      const user=JSON.parse(getUser)
      
      dispatch({ type: "updateTaskStatusRequest" });

      const { data } = await axios.put(`${server}/task/${id}/${user?.group_id}`,
      {status:status}, {
        headers: { Authorization: token, "Content-Type": "application/json" },
      });
      // return console.log("data",data)
      dispatch({
        type: "updateTaskStatusSuccess",
        message:data.message,
        payload: data?.data,
      });
    }
  } catch (err) {
    dispatch({
      type: "updateTaskStatusFail",
      payload: err.response.data.error
    });
    console.error(err.response.data.error);
  }
};
export const deleteTaskAction = (id,status) => async (dispatch) => {
  try {
    const getUser = localStorage.getItem("user");
    console.log("getUser",getUser)
    if (getUser) {
      const user=JSON.parse(getUser)
      dispatch({ type: "deleteTaskRequest" });

      const { data } = await axios.delete(`${server}/task/${id}/${user?.group_id}`,
      {status:status}, {
        headers: { Authorization: token, "Content-Type": "application/json" },
      });
      // return console.log("data",data)
      dispatch({
        type: "deleteTaskSuccess",
        message:data.message,
        payload: data?.data
      });
    }
  } catch (err) {
    dispatch({
      type: "deleteTaskFail",
      payload: err.response.data.error
    });
    console.error(err.response.data.error);
  }
};
export const addTaskAction = (title,description) => async (dispatch) => {
  try {
    const getUser = localStorage.getItem("user");
    console.log("getUser",getUser)
    if (getUser) {
      const user=JSON.parse(getUser)
      dispatch({ type: "addTaskRequest" });

      const { data } = await axios.post(`${server}/task`,
      {
        title,
        description,
        group_name:user.group_name,
        group_id:user.group_id
      }, {
        headers: { Authorization: token, "Content-Type": "application/json" },
      });
     console.log("dataaaa",data)
      dispatch({
        type: "addTaskSuccess",
        payload: data?.tasks,
        message:data.message
      });
    }
  } catch (err) {
    dispatch({
      type: "addTaskFail",
      payload: err.response.data.error
    });
    console.error(err.response.data.message);
  }
};
