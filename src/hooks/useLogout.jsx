export const useLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
