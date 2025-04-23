"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTodo, updateTodo } from "@/lib/api/todos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  id: string;
};

export function UpdateTodoButton({ id }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!open) return;

    const fetchTodo = async () => {
      try {
        const todo = await getTodo(id);
        setTitle(todo.title || "");
        setDescription(todo.description || "");
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchTodo();
  }, [open]);

  const handleUpdate = async () => {
    try {
      await updateTodo(id, { title, description });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Update</Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900">
        <DialogHeader>
          <DialogTitle>Update to-do</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleUpdate}>
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
