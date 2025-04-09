
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthForm } from "@/components/auth-form";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AuthForm />
      <Footer />
    </div>
  );
};

export default Login;
