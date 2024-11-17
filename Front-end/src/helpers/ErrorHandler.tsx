import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
   if (axios.isAxiosError(error)) {
    var err = error.response;
    if (Array.isArray(err?.data.errors)) {
      for (let val of err?.data.errors) {
        console.log(err.data)
        toast.warning(val.description, {
            position: "bottom-right",
        });
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        console.log(err.data)
        toast.warning(err.data.errors[e][0], {
            position: "bottom-right",
        });
      }
    } else if (err?.data) {
      toast.warning(err.data);
      console.log(err.data)
    } else if (err?.status == 401) {
      console.log(err.data)
        toast.warning("Por favor entre na sua conta", {
        position: "bottom-right",
      });
      window.history.pushState({}, "PaginaLogin", "/login");
    } else if (err) {
      console.log(err.data)
        toast.warning(err?.data, {
        position: "bottom-right",
      });
    }
  }
};