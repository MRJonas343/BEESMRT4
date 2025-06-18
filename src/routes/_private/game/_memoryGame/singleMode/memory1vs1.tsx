import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/game/_memoryGame/singleMode/memory1vs1')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/game/_memoryGame/singleMode/memory1vs1"!</div>
}
