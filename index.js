import { html, render } from "lit-html";
const LoginForm = () => html`
<h2> Login </h2>
<form>
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <button type="submit"> SUBMIT </button>
</form>
`

const RegisterForm = () => html`
  <h2>Register</h2>
  <form>
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="passwordConfirm" placeholder="Confirm" />
    <button type="submit">SUBMIT</button>
  </form>
`;

const HomePage = () => html`
<h1> CSar </h1>
${LoginForm()}
${RegisterForm()}
`

render(HomePage(), document.body);
