import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game/_memoryGame/1vs1Mode/memory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/game/_memoryGame/1vs1Mode/memoryGame"!</div>
}
