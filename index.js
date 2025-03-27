var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType('gutenberg-course/first-block', {
    edit: function() {
        return createElement("p", null, "Edit");
    },
    save: function() {
        return createElement("p", null, "Save");
    },
});
