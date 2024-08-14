import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create/post')({
  component: () => <div>Hello /create/post!</div>
})
