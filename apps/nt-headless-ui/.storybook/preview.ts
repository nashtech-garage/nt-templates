import '../app/globals.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: [
                'Foundation',
                [
                    'Colors',
                    [
                        'Brand',
                        'Shades',
                        'Success',
                        'Warning',
                        'Danger',
                        'Info',
                    ],
                ],
                'Components',
            ],
        },
    },
}
export const tags = ['autodocs', 'autodocs']
