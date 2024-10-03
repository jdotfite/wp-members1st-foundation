#!/bin/bash

# Verbose SFTP Deployment Script for WordPress

# SFTP Credentials
SFTP_HOST="iad1-shared-b8-15.dreamhost.com"
SFTP_USER="dh_3xevxe"
SFTP_PASS="Jackson3576!"  # Replace with your actual password
REMOTE_DIR="/home/dh_3xevxe/deprecatedtechnologies.com"

# Local directory
LOCAL_DIR="."

# Create a temporary SFTP commands file
cat << EOF > sftpcmd.txt
cd $REMOTE_DIR
put -r *
bye
EOF

# Run SFTP with password
echo "Starting SFTP deployment..."
sftp -oBatchMode=no -b sftpcmd.txt $SFTP_USER@$SFTP_HOST <<< "$SFTP_PASS"

# Clean up
rm sftpcmd.txt

echo "Deployment complete!"
