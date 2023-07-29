import PortableText from '@/components/PortableText';
import { PortableTextProps } from '@portabletext/react';

const TextBlock = (props: {portableText?: PortableTextProps<any>}) => {
    const { portableText } = props;
    return (
        <div className="text-block ">
            <PortableText value={portableText} />
        </div>
    );
};

export default TextBlock;