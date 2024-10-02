<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'd/+:B0@IeBs:UMTmrZ0}QqUrPNyqb]4[@6!^)6aI|Z[5HJ9=z(bv1DS2R )(2[I=' );
define( 'SECURE_AUTH_KEY',   'Qj67DJI6PZyf6F.6GH.-.H%,1}mB{G-;fawj;/tfK.g*kVNMi}na,i3Y*<tQ5Npf' );
define( 'LOGGED_IN_KEY',     '!dA#.tz_W>72!:>8}|T*R8|8:^QZ !ywL^aVyBAfaplv qUo%OIg3|tOk6k$P@.f' );
define( 'NONCE_KEY',         'cJF&BZ=2f^2G2?b(XB?[lH35:|pc]7R$OSh<pi<E1K:-4dt_!zPk|YQ6n$.q8eD#' );
define( 'AUTH_SALT',         'hL6Wf^WH;D)ZB6a$,_]h0yx%Qsw<NNJ~C86C&A$zzpz}e.5+@/IM$8/V `5BW<gj' );
define( 'SECURE_AUTH_SALT',  'H^kp{Wv/rKpcjr3G`c23|shbG=|z5%3H0NTTFEacmUGnx<2+,f%A;564a8{[q8*T' );
define( 'LOGGED_IN_SALT',    'V@|z>sl~=c28_r_iIPm{g9=!hG8nX&FQ[-6V$%@y8)4;[4tI$-:$rN>%ylCd*q_!' );
define( 'NONCE_SALT',        'z25E&$zj|CT&a/hB6-p;Ft,DEbPv~$&H-6EhlEd-o:&);o!4Zjp.gfzu1hH@jou-' );
define( 'WP_CACHE_KEY_SALT', 'I^<@?T-<coE <kp=be^TL,FxUQvl}del7QfVg4N*K!)j2Gy!MhAj(|,exe*)Mr5n' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
