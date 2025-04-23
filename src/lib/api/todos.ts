const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/?skip=0&limit=100&sort_direction=asc`);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export async function getTodo(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export async function createTodo(todoData: {
  title: string;
  description?: string;
}) {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!res.ok) {
    throw new Error("Failed to create todo");
  }

  return res.json();
}

export async function deleteTodo(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }

  return res.json();
}

export async function updateTodo(
  id: string,
  todoData: {
    title: string;
    description?: string;
    completed?: boolean;
  }
) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  return res.json();
}
