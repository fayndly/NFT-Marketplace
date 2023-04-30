set -e

npm run build

cd dist

mv index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:LIFIIJ/nft-marketplace.git master:gh-pages

cd -