import { redirect } from "react-router-dom";
import { parseFormData } from "../../utils/parseFormData";

export async function loginAction({ request }) {
  // const contentType = request.headers.get("content-type");
  // const isJsonRequest = contentType === "application/json";
  // const data = isJsonRequest
  //   ? await request.json()
  //   : parseFormData(await request.formData());

  const data = parseFormData(await request.formData());

  const { method } = request;

  if (method == "POST") {
    const { email, password } = data as { email: string; password: string };
    console.log(email, password);
    alert("Login successul !");
  }

  return redirect("../");
}
