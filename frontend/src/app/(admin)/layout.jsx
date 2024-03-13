import NavBar from "./navbar";

export default async function DashboardLayout({ children }) {
  return (
    <>
      <section className="h-full">
        <NavBar />
        <div className="ml-56 h-screen overflow-y-auto bg-gray-50 px-10 ">
          <main>{children}</main>
        </div>
      </section>
    </>
  );
}
