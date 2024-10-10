/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/custom-button/index.js ***!
  \*******************************************/
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
  InspectorControls = _wp$blockEditor.InspectorControls,
  RichText = _wp$blockEditor.RichText,
  useBlockProps = _wp$blockEditor.useBlockProps,
  MediaUpload = _wp$blockEditor.MediaUpload,
  MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  SelectControl = _wp$components.SelectControl,
  ToggleControl = _wp$components.ToggleControl,
  Button = _wp$components.Button;
registerBlockType('tailpress/custom-button', {
  title: __('Custom Button', 'tailpress'),
  icon: 'button',
  category: 'design',
  attributes: {
    content: {
      type: 'string',
      "default": __('Button', 'tailpress')
    },
    size: {
      type: 'string',
      "default": 'md'
    },
    style: {
      type: 'string',
      "default": 'primary'
    },
    isFullWidth: {
      type: 'boolean',
      "default": false
    },
    isMobileFullWidth: {
      type: 'boolean',
      "default": false
    },
    icon: {
      type: 'object',
      "default": null
    },
    iconPosition: {
      type: 'string',
      "default": 'left'
    },
    isUppercase: {
      type: 'boolean',
      "default": true
    },
    alignment: {
      type: 'string',
      "default": 'left'
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var content = attributes.content,
      size = attributes.size,
      style = attributes.style,
      isFullWidth = attributes.isFullWidth,
      isMobileFullWidth = attributes.isMobileFullWidth,
      icon = attributes.icon,
      iconPosition = attributes.iconPosition,
      isUppercase = attributes.isUppercase,
      alignment = attributes.alignment;
    var sizeClasses = {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-2.5',
      xl: 'text-xl px-6 py-3',
      '2xl': 'text-2xl px-8 py-4'
    };
    var styleClasses = {
      primary: 'bg-black text-white',
      secondary: 'bg-gray-600 text-white',
      'primary-outline': 'btn-outline',
      'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent'
    };
    var alignmentClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    };
    var baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none transition-colors duration-200';
    var buttonClasses = "\n            ".concat(baseClasses, "\n            ").concat(sizeClasses[size], "\n            ").concat(styleClasses[style], "\n            ").concat(isUppercase ? 'uppercase' : '', "\n            ").concat(isFullWidth ? 'w-full' : isMobileFullWidth ? 'w-full md:w-auto' : '', "\n        ");
    var wrapperClasses = "\n            flex ".concat(alignmentClasses[alignment], "\n            ").concat(isMobileFullWidth ? 'w-full md:w-auto' : '', "\n        ");
    var blockProps = useBlockProps({
      className: wrapperClasses
    });
    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        icon: media
      });
    };
    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
      title: __('Button Settings', 'tailpress')
    }, wp.element.createElement(SelectControl, {
      label: __('Size', 'tailpress'),
      value: size,
      options: [{
        label: __('Extra Small', 'tailpress'),
        value: 'xs'
      }, {
        label: __('Small', 'tailpress'),
        value: 'sm'
      }, {
        label: __('Medium', 'tailpress'),
        value: 'md'
      }, {
        label: __('Large', 'tailpress'),
        value: 'lg'
      }, {
        label: __('Extra Large', 'tailpress'),
        value: 'xl'
      }, {
        label: __('2XL', 'tailpress'),
        value: '2xl'
      }],
      onChange: function onChange(newSize) {
        return setAttributes({
          size: newSize
        });
      }
    }), wp.element.createElement(SelectControl, {
      label: __('Style', 'tailpress'),
      value: style,
      options: [{
        label: __('Primary', 'tailpress'),
        value: 'primary'
      }, {
        label: __('Secondary', 'tailpress'),
        value: 'secondary'
      }, {
        label: __('Primary Outline', 'tailpress'),
        value: 'primary-outline'
      }, {
        label: __('Secondary Outline', 'tailpress'),
        value: 'secondary-outline'
      }],
      onChange: function onChange(newStyle) {
        return setAttributes({
          style: newStyle
        });
      }
    }), wp.element.createElement(SelectControl, {
      label: __('Alignment', 'tailpress'),
      value: alignment,
      options: [{
        label: __('Left', 'tailpress'),
        value: 'left'
      }, {
        label: __('Center', 'tailpress'),
        value: 'center'
      }, {
        label: __('Right', 'tailpress'),
        value: 'right'
      }],
      onChange: function onChange(newAlignment) {
        return setAttributes({
          alignment: newAlignment
        });
      }
    }), wp.element.createElement(ToggleControl, {
      label: __('Full Width Always', 'tailpress'),
      checked: isFullWidth,
      onChange: function onChange() {
        return setAttributes({
          isFullWidth: !isFullWidth,
          isMobileFullWidth: false
        });
      }
    }), !isFullWidth && wp.element.createElement(ToggleControl, {
      label: __('Full Width on Mobile', 'tailpress'),
      checked: isMobileFullWidth,
      onChange: function onChange() {
        return setAttributes({
          isMobileFullWidth: !isMobileFullWidth
        });
      }
    }), wp.element.createElement(ToggleControl, {
      label: __('Uppercase', 'tailpress'),
      checked: isUppercase,
      onChange: function onChange() {
        return setAttributes({
          isUppercase: !isUppercase
        });
      }
    }), wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: ['image/svg+xml'],
      value: icon ? icon.id : '',
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          onClick: open,
          isPrimary: true,
          style: {
            marginBottom: '16px'
          }
        }, icon ? __('Change SVG Icon', 'tailpress') : __('Select SVG Icon', 'tailpress'));
      }
    })), icon && wp.element.createElement(Button, {
      onClick: function onClick() {
        return setAttributes({
          icon: null
        });
      },
      isDestructive: true,
      style: {
        marginBottom: '16px'
      }
    }, __('Remove SVG Icon', 'tailpress')), icon && wp.element.createElement(SelectControl, {
      label: __('Icon Position', 'tailpress'),
      value: iconPosition,
      options: [{
        label: __('Left', 'tailpress'),
        value: 'left'
      }, {
        label: __('Right', 'tailpress'),
        value: 'right'
      }],
      onChange: function onChange(newPosition) {
        return setAttributes({
          iconPosition: newPosition
        });
      }
    }))), wp.element.createElement('div', blockProps, wp.element.createElement('div', {
      className: buttonClasses
    }, iconPosition === 'left' && icon && wp.element.createElement('img', {
      src: icon.url,
      alt: icon.alt || '',
      className: 'icon',
      style: {
        width: '1em',
        height: '1em',
        marginRight: '0.5em'
      }
    }), wp.element.createElement(RichText, {
      tagName: 'span',
      value: content,
      onChange: function onChange(newContent) {
        return setAttributes({
          content: newContent
        });
      },
      placeholder: __('Button text...', 'tailpress'),
      allowedFormats: []
    }), iconPosition === 'right' && icon && wp.element.createElement('img', {
      src: icon.url,
      alt: icon.alt || '',
      className: 'icon',
      style: {
        width: '1em',
        height: '1em',
        marginLeft: '0.5em'
      }
    }))));
  },
  save: function save(props) {
    var attributes = props.attributes;
    var content = attributes.content,
      size = attributes.size,
      style = attributes.style,
      isFullWidth = attributes.isFullWidth,
      isMobileFullWidth = attributes.isMobileFullWidth,
      icon = attributes.icon,
      iconPosition = attributes.iconPosition,
      isUppercase = attributes.isUppercase,
      alignment = attributes.alignment;
    var sizeClasses = {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-2.5',
      xl: 'text-xl px-6 py-3',
      '2xl': 'text-2xl px-8 py-4'
    };
    var styleClasses = {
      primary: 'bg-black text-white',
      secondary: 'bg-gray-600 text-white',
      'primary-outline': 'btn-outline',
      'secondary-outline': 'bg-gray-600 border-2 text-black bg-transparent'
    };
    var alignmentClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    };
    var baseClasses = 'inline-flex items-center justify-center text-center focus:outline-none transition-colors duration-200';
    var buttonClasses = "\n            ".concat(baseClasses, "\n            ").concat(sizeClasses[size], "\n            ").concat(styleClasses[style], "\n            ").concat(isUppercase ? 'uppercase' : '', "\n            ").concat(isFullWidth ? 'w-full' : isMobileFullWidth ? 'w-full md:w-auto' : '', "\n        ");
    var wrapperClasses = "\n            flex ".concat(alignmentClasses[alignment], "\n            ").concat(isMobileFullWidth ? 'w-full md:w-auto' : '', "\n        ");
    return wp.element.createElement('div', {
      className: wrapperClasses
    }, wp.element.createElement('a', {
      href: '#',
      className: buttonClasses
    }, iconPosition === 'left' && icon && wp.element.createElement('img', {
      src: icon.url,
      alt: icon.alt || '',
      className: 'icon',
      style: {
        width: '1em',
        height: '1em',
        marginRight: '0.5em'
      }
    }), wp.element.createElement('span', null, content), iconPosition === 'right' && icon && wp.element.createElement('img', {
      src: icon.url,
      alt: icon.alt || '',
      className: 'icon',
      style: {
        width: '1em',
        height: '1em',
        marginLeft: '0.5em'
      }
    })));
  }
});
/******/ })()
;