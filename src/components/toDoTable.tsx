import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTodos } from "@/lib/api/todos";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { UpdateTodoButton } from "./updateToDo";

export default async function ToDoTable() {
  const todos = await getTodos();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo: any) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell className="max-w-[200px] truncate">
              {todo.description}
            </TableCell>
            <TableCell>{todo.completed === false ? "Open" : "Done"}</TableCell>
            <TableCell className="text-right grid grid-cols-2 gap-2">
              <UpdateTodoButton id={todo.id} />
              <DeleteTodoButton id={todo.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
