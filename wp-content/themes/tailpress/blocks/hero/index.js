import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'tailpress/hero', {
    edit: ( { attributes, setAttributes } ) => {
        const blockProps = useBlockProps();
        return (
            <div { ...blockProps }>
                <TextControl
                    label="Heading"
                    value={ attributes.heading }
                    onChange={ ( heading ) => setAttributes( { heading } ) }
                />
            </div>
        );
    },
    save: () => null, // We're using PHP to render, so return null here
} );