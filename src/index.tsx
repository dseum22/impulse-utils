import {
    Children,
    cloneElement,
    FunctionComponent,
    ReactElement,
    ReactNode,
} from 'react'

export const classNames = (...classes: Array<String>) =>
    classes.filter(Boolean).join(' ')

export const subComponent = {
    create: (name: string) => {
        const component: FunctionComponent<any> = props => props.children
        component.displayName = name
        return component
    },
    select: (
        children: ReactNode,
        name: String,
        props: {} = {},
        inner: Boolean = false
    ) => {
        return Children.map(children, (child: ReactElement<any, any>) => {
            if (child.type.displayName === name) {
                return inner
                    ? cloneElement(child.props.children, props)
                    : cloneElement(child, props)
            }
        })
    },
}
