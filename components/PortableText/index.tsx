import Link from 'next/link';
// import Button from './ui/Button'
// import ExternalLink from './svgr/ExternalLink';
import { PortableText, PortableTextProps, PortableTextReactComponents } from '@portabletext/react';

const pageTypesBaseUrl: {[key: string]: string} = {
    symptom: '/symptom/',
    page: '/',
    frontpage: '/',
};

const baseSerializers: Partial<PortableTextReactComponents> = {
    block: {
        h2: (props) => (
            <h2 className="font-bold text-2xl mb-4 mt-8">{props?.children}</h2>
        ),
        h3: (props) => (
            <h3 className="heading-l mt-10 first-of-type:mt-0 mb-2">
                {props?.children}
            </h3>
        ),
        h4: (props) => <h4 className="heading-m mb-4 mt-8">{props?.children}</h4>,
        h5: (props) => <h5 className="heading-s mb-4 mt-6">{props?.children}</h5>,
        normal: (props) => (
            <p className="body-lr my-4 first-of-type:mt-0 last-of-type:mb-0">
                {props?.children}
            </p>
        ),
        label: (props) => <p className="body-lr mb-2 mt-4">{props?.children}</p>,
        smaller: (props) => <p className="body-r mb-4">{props?.children}</p>,
    },
    marks: {
        internalLink: (props) => {
            const { value, children } = props;
            const { blank, anchor, slug, buttonStyle } = value;

            const type = slug?._type;
            const pageslug = slug?.current;

            const href = `${pageTypesBaseUrl.hasOwnProperty(type) ? pageTypesBaseUrl[type] : '/'
                }${pageslug}`;

            return (
                <Link href={href || '/'} className="underline">
                    {children}
                </Link>
            );
        },
        externalLink: (props) => {
            const { value, children } = props;
            const { blank, href } = value;
            return blank ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    <span>{children}</span>
                </a>
            ) : (
                <a href={href}>
                    <>
                        <span className="underline hover:opacity-80">{children}</span>
                    </>
                </a>
            );
        },
    },
    list: {
        bullet: (props) => {
            const { children } = props;
            // ul with classname and ul child with classname

            return (
                <ul className="list-disc my-4 pl-6 mb-4 gap-y-3 flex flex-col marker:text-orange">
                    {children}
                </ul>
            );
        },
        number: (props) => {
            const { children } = props;
            return <ul className="list-dec pl-6 mb-4">{children}</ul>;
        },
    },
};

export const PortableTextSerialized = ({ value }: PortableTextProps<any>) => {
    return (
        <div className={`__PORTABLETEXT flex flex-col ${'gap-y-2'}`}>
            <PortableText value={value} components={baseSerializers} />
        </div>
    );
};

export default PortableTextSerialized;