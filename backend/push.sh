rm -f package-lock.json;
ssh root@bender.hktr.de 'mkdir -p /var/www/postcode'
rsync -vzh --partial --progress \
  postcode.service *.js *.json *.lock \
  root@bender.hktr.de:/var/www/postcode/
ssh root@bender.hktr.de '
cd /var/www/postcode/;
yarn install;
test -f /etc/systemd/system/postcode.service || {
  cp postcode.service /etc/systemd/system/;
  systemctl daemon-reload;
  systemctl enable postcode;
};
systemctl restart postcode;';