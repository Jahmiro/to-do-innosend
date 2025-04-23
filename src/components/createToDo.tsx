'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createTodo } from '@/lib/api/todos'

export function CreateToDo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return

    setLoading(true)
    try {
      await createTodo({ title, description })
      setTitle('')
      setDescription('')
      router.refresh()
    } catch (error) {
      console.error('error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-md border-brand-700 p-[24px]"
    >
      <div className="flex justify-center mb-[24px]">
        <h1 className="text-lg font-bold">Create new To-Do</h1>
      </div>

      <div className="grid gap-[24px]">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          type="submit"
          className={buttonVariants({ variant: 'outline' })}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Send'}
        </Button>
      </div>
    </form>
  )
}
