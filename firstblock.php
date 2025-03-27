<?php
/**
 * plugin name: first block
 * description: this is a first block
 * version: 1.0.0
 * author: your name
 */

 function blocks_course_first_block_init() {
    register_block_type_from_metadata( __DIR__ );
 }

 add_action( 'init', 'blocks_course_first_block_init' );


