'use strict' ;

/*!
 * Common Custom (base) jQuery plugin v1.8.3
 * V: [0.1 (Guia Tech (João Guilherme))]
 * Copyright 2015, Guia Tech
 * Author: Joao Guilherme C. Prado, Marcondes Silva
 * Library dep.: jQuery 1.8.3
 *
 * Plugin for chrome/firefox which removes all the elements from the page and let only the youtube video tag plays
 *
 * Date: Wed Jul 1 2015 19:15:34 GMT-0300
 */

var nuketube = nuketube || {} ;

nuketube.config = {
	copy_elements_context: 'copy-elements-for-nuketube',
	// jquery_src_context: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
	time_add_copies: 3000,

	add_script_to_the_page: function( src, callback ){
		var script = document.createElement( 'script' ) ;

		script.setAttribute( 'src', src ) ;
		script.setAttribute( 'type', 'text/javascript' ) ;

		script.onload = callback ;
		script.onreadystatechange = function() {
			if ( this.readyState === 'loaded' || this.readyState === 'complete' ) {
				callback() ;
			}
		} ;

		document.getElementsByTagName('head')[ 0 ].appendChild( script ) ;
	},

	let_the_video_plays: function() {
		var that = this,
		copy_elements_context = document.createElement( 'div' ),
		body = document.getElementById( 'body-container' ),
		node = body.parentNode ;


		node.insertBefore( copy_elements_context, node ) ;
		// $( '*:not(.html5-video-player):not(body)' ).appendTo( '.' + that.copy_elements_context ) ;
		// $( 'video.html5-main-video', '.html5-video-player' ).css( 'width', '100%' ).css( 'height', 'auto' ) ;
	},

	init: function() {
		var that = this ;

		that.let_the_video_plays() ;
	}
} ;

( function() {
	nuketube.config.init() ;
} )() ;