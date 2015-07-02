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

var QueryString = function () {
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [ query_string[pair[0]], pair[1] ];
			query_string[pair[0]] = arr;
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	} 
	return query_string;
} ();

nuketube.config = {
	html5_video_player: 'html5-video-player',
	time_add_copies: 3000,

	let_the_video_plays: function() {
		var that = this,
		body = document.getElementById( 'body' ),
		body_container = document.getElementById( 'body-container' ),
		head = document.getElementsByTagName( 'head' )[ 0 ],
		html = document.getElementsByTagName( 'html' )[ 0 ] ;

		head.parentNode.removeChild( head ) ;
		body.parentNode.removeChild( body ) ;
		body_new = document.createElement( 'body' ) ;
		body_new.setAttribute( 'id', 'body' ) ;
		body_new.style.background = '#000';
		body_new.style.margin = '0';
		clone_video_node = document.createElement( 'div' ) ;
		clone_video_node.innerHTML = '<iframe width="100%" height="100%" style="position: absolute;" src="\
			https://www.youtube.com/embed/' + QueryString.v + '?autoplay=1\
			" frameborder="0" allowfullscreen autoplay></iframe>' ;
		body_new.appendChild( clone_video_node ) ;

		html.appendChild( body_new ) ;
	},

	init: function() {
		var that = this ;

		that.let_the_video_plays() ;
	}
} ;

( function() {
	nuketube.config.init() ;
} )() ;