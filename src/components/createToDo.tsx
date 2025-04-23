import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CreateToDo() {
  return (
    <div className="border rounded-md border-brand-700 p-[24px]">
        <div className="flex justify-center mb-[24px]">
        <h1>Create new To-Do</h1>
        </div>
        <div className="grid gap-[24px]">
      <Input type="Title" placeholder="Email" />
      <Textarea placeholder="Description" />
      <Button className={buttonVariants({ variant: "outline" })}>Send</Button>
      </div>
    </div>
  );
}
