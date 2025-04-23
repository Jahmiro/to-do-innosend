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

export function UpdateTodoButton({ id }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await deleteTodo(id);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900">
        <DialogHeader>
          <DialogTitle>
            Weet je zeker dat je deze todo wilt verwijderen?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Annuleer
          </Button>
          <Button
            variant="destructive"
            onClick={handleUpdate}
            disabled={loading}
            className="hover:border-amber-200"
          >
            {loading ? "update..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
