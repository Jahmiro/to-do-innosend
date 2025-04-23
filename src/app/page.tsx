import { CreateToDo } from "@/components/createToDo";
import { Navbar } from "@/components/navbar";
import { ToDoTable } from "@/components/toDoTable";



type ToDo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type Props = {
  products: ToDo[];
};

export default function TodoPage({ products }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground px-6 py-10 space-y-20 pt-24">
        <CreateToDo />
        <ToDoTable />
      </main>
    </>
  );
}
