import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game/_hangmanGame/1vs1Mode/hangman1vs1')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/game/_hangmanGame/1vs1Mode/hangman1vs1"!</div>
}
