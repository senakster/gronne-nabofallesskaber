import { PortableTextProps, PortableTextReactComponents } from '@portabletext/react';
import Blocks from '@/components/Blocks';

const blockTypes = {
    // groq._ref-> Expanded / altered _type - check
};

const ContentBlocks = (props: {contentBlocks: any[]}) => {
    const { contentBlocks } = props || {};
    return (
        <section className={`__ContentBlocks`}>
            <div className="content">
                {contentBlocks?.map &&
                    contentBlocks.map((b: { _type: string}, i: number) => {
                        const blocktype = (Object.keys(Blocks).find(k => `${b._type.charAt(0).toUpperCase()}${b._type.slice(1)}` === k) || 'MissingBlock') as keyof typeof Blocks
                        const Block = Blocks[blocktype]
                        return (
                            <div key={i} className={`${i === 0 ? 'my-8' : 'my-8'}`}>
                                {<Block {...b} />}
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default ContentBlocks;