<?php
// Define environment
if (file_exists(dirname(__FILE__) . '/wp-config-local.php')) {
    define('WP_ENV', 'local');
    include(dirname(__FILE__) . '/wp-config-local.php');
} else {
    define('WP_ENV', 'production');
    // Production database settings
    define('DB_NAME', 'deprecatedtechnologies_c');  // Verify this is correct
    define('DB_USER', 'deprecatedtechno');         // Verify this is correct
    define('DB_PASSWORD', 'bznA!aHX');             // Verify this is correct
    define('DB_HOST', 'mysql.deprecatedtechnologies.com');  // This might need to change
    define('DB_CHARSET', 'utf8');
    define('DB_COLLATE', '');
    define('WP_HOME', 'https://deprecatedtechnologies.com');
    define('WP_SITEURL', 'https://deprecatedtechnologies.com');
}

// Authentication unique keys and salts.
define('AUTH_KEY',          'd/+:B0@IeBs:UMTmrZ0}QqUrPNyqb]4[@6!^)6aI|Z[5HJ9=z(bv1DS2R )(2[I=');
define('SECURE_AUTH_KEY',   'Qj67DJI6PZyf6F.6GH.-.H%,1}mB{G-;fawj;/tfK.g*kVNMi}na,i3Y*<tQ5Npf');
define('LOGGED_IN_KEY',     '!dA#.tz_W>72!:>8}|T*R8|8:^QZ !ywL^aVyBAfaplv qUo%OIg3|tOk6k$P@.f');
define('NONCE_KEY',         'cJF&BZ=2f^2G2?b(XB?[lH35:|pc]7R$OSh<pi<E1K:-4dt_!zPk|YQ6n$.q8eD#');
define('AUTH_SALT',         'hL6Wf^WH;D)ZB6a$,_]h0yx%Qsw<NNJ~C86C&A$zzpz}e.5+@/IM$8/V `5BW<gj');
define('SECURE_AUTH_SALT',  'H^kp{Wv/rKpcjr3G`c23|shbG=|z5%3H0NTTFEacmUGnx<2+,f%A;564a8{[q8*T');
define('LOGGED_IN_SALT',    'V@|z>sl~=c28_r_iIPm{g9=!hG8nX&FQ[-6V$%@y8)4;[4tI$-:$rN>%ylCd*q_!');
define('NONCE_SALT',        'z25E&$zj|CT&a/hB6-p;Ft,DEbPv~$&H-6EhlEd-o:&);o!4Zjp.gfzu1hH@jou-');
define('WP_CACHE_KEY_SALT', 'I^<@?T-<coE <kp=be^TL,FxUQvl}del7QfVg4N*K!)j2Gy!MhAj(|,exe*)Mr5n');

$table_prefix = 'wp_';

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

require_once ABSPATH . 'wp-settings.php';