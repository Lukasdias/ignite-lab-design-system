import { Text } from '@components/Text/view'
import { Heading } from '@components/Heading/view'
import { Button } from '@components/Button/view'

export function App() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-gray-900">
            <div className="flex w-full max-w-lg flex-col gap-8">
                <Text size="lg">Hello</Text>
                <Heading size="2xl">World</Heading>
                <Button
                    onClick={() => {
                        console.log('clicked')
                    }}
                >
                    Click me please
                </Button>
            </div>
        </div>
    )
}
