cat << EOF > /web/env.js
process.env.VUE_APP_DAM_URL = '${OPENPIM_SERVER_URL}';
EOF

nginx -g 'daemon off;'
