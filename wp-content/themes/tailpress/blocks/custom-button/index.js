const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

registerBlockType('tailpress/custom-button', {
    title: __('Custom Button', 'tailpress'),
    icon: 'button',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            default: __('Click me', 'tailpress'),
        },
        size: {
            type: 'string',
            default: 'md',
        },
        style: {
            type: 'string',
            default: 'primary',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { content, size, style } = attributes;
        const blockProps = useBlockProps();

        const sizeClasses = {
            xs: 'text-xs px-2 py-1',
            sm: 'text-sm px-3 py-1.5',
            md: 'text-base px-4 py-2',
            lg: 'text-lg px-5 py-2.5',
            xl: 'text-xl px-6 py-3',
            '2xl': 'text-2xl px-8 py-4',
        };

        const styleClasses = {
            primary: 'bg-black text-white',
            secondary: 'bg-gray-600 text-white',
            'primary-outline': 'border-2 border-white text-white bg-transparent',
            'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent',
        };

        const baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
        
        const buttonClasses = `
            ${baseClasses}
            ${sizeClasses[size]}
            ${styleClasses[style]}
        `;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Button Settings', 'tailpress')}>
                        <SelectControl
                            label={__('Size', 'tailpress')}
                            value={size}
                            options={[
                                { label: __('Extra Small', 'tailpress'), value: 'xs' },
                                { label: __('Small', 'tailpress'), value: 'sm' },
                                { label: __('Medium', 'tailpress'), value: 'md' },
                                { label: __('Large', 'tailpress'), value: 'lg' },
                                { label: __('Extra Large', 'tailpress'), value: 'xl' },
                                { label: __('2XL', 'tailpress'), value: '2xl' },
                            ]}
                            onChange={(newSize) => setAttributes({ size: newSize })}
                        />
                        <SelectControl
                            label={__('Style', 'tailpress')}
                            value={style}
                            options={[
                                { label: __('Primary', 'tailpress'), value: 'primary' },
                                { label: __('Secondary', 'tailpress'), value: 'secondary' },
                                { label: __('Primary Outline', 'tailpress'), value: 'primary-outline' },
                                { label: __('Secondary Outline', 'tailpress'), value: 'secondary-outline' },
                            ]}
                            onChange={(newStyle) => setAttributes({ style: newStyle })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <RichText
                        tagName="button"
                        className={buttonClasses}
                        value={content}
                        onChange={(newContent) => setAttributes({ content: newContent })}
                        placeholder={__('Button text...', 'tailpress')}
                    />
                </div>
            </>
        );
    },
    save: function(props) {
        const { attributes } = props;
        const { content, size, style } = attributes;

        const sizeClasses = {
            xs: 'text-xs px-2 py-1',
            sm: 'text-sm px-3 py-1.5',
            md: 'text-base px-4 py-2',
            lg: 'text-lg px-5 py-2.5',
            xl: 'text-xl px-6 py-3',
            '2xl': 'text-2xl px-8 py-4',
        };

        const styleClasses = {
            primary: 'bg-black text-white',
            secondary: 'bg-gray-600 text-white',
            'primary-outline': 'border-2 border-white text-white bg-transparent',
            'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent',
        };

        const baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

        const buttonClasses = `
            ${baseClasses}
            ${sizeClasses[size]}
            ${styleClasses[style]}
        `;

        return (
            <button className={buttonClasses}>
                <RichText.Content value={content} />
            </button>
        );
    },
});
