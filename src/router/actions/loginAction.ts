import { redirect } from "react-router-dom";
import { parseFormData } from "../../utils/parseFormData";

export async function loginAction({ request }: { request: Request }) {
  const data = parseFormData(await request.formData());

  const { method } = request;

  if (method == "POST") {
    const { email, password } = data as { email: string; password: string };
    console.log(email, password);
    alert("Login successul !");
  }

  return redirect("../");
}
