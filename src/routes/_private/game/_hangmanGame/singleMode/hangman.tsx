import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_private/game/_hangmanGame/singleMode/hangman',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/game/_hangmanGame/singleMode/hangmanGame"!</div>
}
