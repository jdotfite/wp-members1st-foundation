const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, RichText, useBlockProps, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, Button } = wp.components;

registerBlockType('tailpress/custom-button', {
    title: __('Custom Button', 'tailpress'),
    icon: 'button',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            default: __('Button', 'tailpress'),
        },
        size: {
            type: 'string',
            default: 'md',
        },
        style: {
            type: 'string',
            default: 'primary',
        },
        isFullWidth: {
            type: 'boolean',
            default: false,
        },
        isMobileFullWidth: {
            type: 'boolean',
            default: false,
        },
        icon: {
            type: 'object',
            default: null,
        },
        iconPosition: {
            type: 'string',
            default: 'left',
        },
        isUppercase: {
            type: 'boolean',
            default: true,
        },
        alignment: {
            type: 'string',
            default: 'left',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { content, size, style, isFullWidth, isMobileFullWidth, icon, iconPosition, isUppercase, alignment } = attributes;

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
            'primary-outline': 'btn-outline',
            'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent',
        };

        const alignmentClasses = {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        };

        const baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none transition-colors duration-200';

        const buttonClasses = `
            ${baseClasses}
            ${sizeClasses[size]}
            ${styleClasses[style]}
            ${isUppercase ? 'uppercase' : ''}
            ${isFullWidth ? 'w-full' : isMobileFullWidth ? 'w-full md:w-auto' : ''}
        `;

        const wrapperClasses = `
            flex ${alignmentClasses[alignment]}
            ${isMobileFullWidth ? 'w-full md:w-auto' : ''}
        `;

        const blockProps = useBlockProps({
            className: wrapperClasses
        });

        const onSelectImage = (media) => {
            setAttributes({
                icon: media
            });
        };

        return wp.element.createElement(
            wp.element.Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    { title: __('Button Settings', 'tailpress') },
                    wp.element.createElement(SelectControl, {
                        label: __('Size', 'tailpress'),
                        value: size,
                        options: [
                            { label: __('Extra Small', 'tailpress'), value: 'xs' },
                            { label: __('Small', 'tailpress'), value: 'sm' },
                            { label: __('Medium', 'tailpress'), value: 'md' },
                            { label: __('Large', 'tailpress'), value: 'lg' },
                            { label: __('Extra Large', 'tailpress'), value: 'xl' },
                            { label: __('2XL', 'tailpress'), value: '2xl' },
                        ],
                        onChange: (newSize) => setAttributes({ size: newSize })
                    }),
                    wp.element.createElement(SelectControl, {
                        label: __('Style', 'tailpress'),
                        value: style,
                        options: [
                            { label: __('Primary', 'tailpress'), value: 'primary' },
                            { label: __('Secondary', 'tailpress'), value: 'secondary' },
                            { label: __('Primary Outline', 'tailpress'), value: 'primary-outline' },
                            { label: __('Secondary Outline', 'tailpress'), value: 'secondary-outline' },
                        ],
                        onChange: (newStyle) => setAttributes({ style: newStyle })
                    }),
                    wp.element.createElement(SelectControl, {
                        label: __('Alignment', 'tailpress'),
                        value: alignment,
                        options: [
                            { label: __('Left', 'tailpress'), value: 'left' },
                            { label: __('Center', 'tailpress'), value: 'center' },
                            { label: __('Right', 'tailpress'), value: 'right' },
                        ],
                        onChange: (newAlignment) => setAttributes({ alignment: newAlignment })
                    }),
                    wp.element.createElement(ToggleControl, {
                        label: __('Full Width Always', 'tailpress'),
                        checked: isFullWidth,
                        onChange: () => setAttributes({ isFullWidth: !isFullWidth, isMobileFullWidth: false })
                    }),
                    !isFullWidth && wp.element.createElement(ToggleControl, {
                        label: __('Full Width on Mobile', 'tailpress'),
                        checked: isMobileFullWidth,
                        onChange: () => setAttributes({ isMobileFullWidth: !isMobileFullWidth })
                    }),
                    wp.element.createElement(ToggleControl, {
                        label: __('Uppercase', 'tailpress'),
                        checked: isUppercase,
                        onChange: () => setAttributes({ isUppercase: !isUppercase })
                    }),
                    wp.element.createElement(
                        MediaUploadCheck,
                        null,
                        wp.element.createElement(MediaUpload, {
                            onSelect: onSelectImage,
                            allowedTypes: ['image/svg+xml'],
                            value: icon ? icon.id : '',
                            render: ({ open }) => (
                                wp.element.createElement(Button, {
                                    onClick: open,
                                    isPrimary: true,
                                    style: { marginBottom: '16px' }
                                }, icon ? __('Change SVG Icon', 'tailpress') : __('Select SVG Icon', 'tailpress'))
                            )
                        })
                    ),
                    icon && wp.element.createElement(Button, {
                        onClick: () => setAttributes({ icon: null }),
                        isDestructive: true,
                        style: { marginBottom: '16px' }
                    }, __('Remove SVG Icon', 'tailpress')),
                    icon && wp.element.createElement(SelectControl, {
                        label: __('Icon Position', 'tailpress'),
                        value: iconPosition,
                        options: [
                            { label: __('Left', 'tailpress'), value: 'left' },
                            { label: __('Right', 'tailpress'), value: 'right' },
                        ],
                        onChange: (newPosition) => setAttributes({ iconPosition: newPosition })
                    })
                )
            ),
            wp.element.createElement(
                'div',
                blockProps,
                wp.element.createElement(
                    'div',
                    { className: buttonClasses },
                    iconPosition === 'left' && icon && wp.element.createElement('img', { 
                        src: icon.url, 
                        alt: icon.alt || '',
                        className: 'icon',
                        style: { width: '1em', height: '1em', marginRight: '0.5em' }
                    }),
                    wp.element.createElement(RichText, {
                        tagName: 'span',
                        value: content,
                        onChange: (newContent) => setAttributes({ content: newContent }),
                        placeholder: __('Button text...', 'tailpress'),
                        allowedFormats: [],
                    }),
                    iconPosition === 'right' && icon && wp.element.createElement('img', { 
                        src: icon.url, 
                        alt: icon.alt || '',
                        className: 'icon',
                        style: { width: '1em', height: '1em', marginLeft: '0.5em' }
                    })
                )
            )
        );
    },
    save: function(props) {
        const { attributes } = props;
        const { content, size, style, isFullWidth, isMobileFullWidth, icon, iconPosition, isUppercase, alignment } = attributes;

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
            'primary-outline': 'btn-outline',
            'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent',
        };

        const alignmentClasses = {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        };

        const baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none transition-colors duration-200';

        const buttonClasses = `
            ${baseClasses}
            ${sizeClasses[size]}
            ${styleClasses[style]}
            ${isUppercase ? 'uppercase' : ''}
            ${isFullWidth ? 'w-full' : isMobileFullWidth ? 'w-full md:w-auto' : ''}
        `;

        const wrapperClasses = `
            flex ${alignmentClasses[alignment]}
            ${isMobileFullWidth ? 'w-full md:w-auto' : ''}
        `;

        return wp.element.createElement(
            'div',
            { className: wrapperClasses },
            wp.element.createElement(
                'a',
                { href: '#', className: buttonClasses },
                iconPosition === 'left' && icon && wp.element.createElement('img', { 
                    src: icon.url, 
                    alt: icon.alt || '',
                    className: 'icon',
                    style: { width: '1em', height: '1em', marginRight: '0.5em' }
                }),
                wp.element.createElement('span', null, content),
                iconPosition === 'right' && icon && wp.element.createElement('img', { 
                    src: icon.url, 
                    alt: icon.alt || '',
                    className: 'icon',
                    style: { width: '1em', height: '1em', marginLeft: '0.5em' }
                })
            )
        );
    },
});