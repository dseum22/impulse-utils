import { FunctionComponent, ReactNode } from 'react';
export declare const classNames: (...classes: Array<String>) => string;
export declare const subComponent: {
    create: (name: string) => FunctionComponent<any>;
    select: (children: ReactNode, name: String, props?: {}, inner?: Boolean) => (import("react").DetailedReactHTMLElement<{}, HTMLElement> | import("react").FunctionComponentElement<any>)[] | null | undefined;
};
