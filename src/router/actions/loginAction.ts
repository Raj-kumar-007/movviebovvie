
export async function loginAction({ request }) {
    const data = request.json();
    const { method } = request;

    if (method == 'POST') {
        const { email, password } = data;
        //await login(email, password);
    }

    return {
        status: 200,
        body: { message: 'Login successful' },
    };
}