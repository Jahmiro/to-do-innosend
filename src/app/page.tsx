import { CreateToDo } from "@/components/createToDo";
import { Navbar } from "@/components/navbar";
import ToDoTable from "@/components/toDoTable";

export default function TodoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background  px-6 py-10 space-y-20 pt-24">
        <CreateToDo />
        <ToDoTable />
      </main>
    </>
  );
}
