import { registerBlockType } from '@wordpress/blocks';
import Edit from "./edit";
import Save from "./save";
import './style.scss';

registerBlockType( 'gutenberg-course/first-block', {
	edit: Edit,
	save: Save,
} );
