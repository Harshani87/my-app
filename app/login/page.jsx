import LoginForm from "./login-form";
// server component for SSR
export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm title="SIGN IN TO EVOTECH" />
    </div>
  );
}
