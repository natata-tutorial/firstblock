import {registerBlockType} from "@wordpress/blocks"

registerBlockType('gutenberg-course/first-block', {
edit: function() {
        return <p className="class">Edit JSX</p>;
    },
    save: function() {
        return <p className="class">Save JSX</p>;
    },
})