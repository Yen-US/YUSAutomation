import Footer from "@/components/footer";
import NavbarsParentComponent from "@/components/navbar-parent";


export default async function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between font-mono">
      <NavbarsParentComponent/>
      <div>Hi</div>
      <Footer/>
    </main>
  );
}
