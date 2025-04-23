"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo } from "@/lib/api/todos";
import { Button } from "@/components/ui/button";
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

export function DeleteTodoButton({ id }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900">
        <DialogHeader>
          <DialogTitle>Delete todo</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
