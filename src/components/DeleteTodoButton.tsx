'use client'

import { deleteTodo } from '@/lib/api/todos'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

type Props = {
  id: string
}

export function DeleteTodoButton({ id }: Props) {
  const router = useRouter()

  const handleDelete = async () => {
    try {
      await deleteTodo(id)
      router.refresh()
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <Button variant="outline" onClick={handleDelete}>
      Delete
    </Button>
  )
}
