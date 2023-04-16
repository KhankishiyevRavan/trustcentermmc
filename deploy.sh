echo "Switching to branch master"
git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server ..."
scp -r build/* trust@65.108.146.69:/var/www/65.108.146.69/ 

echo "Done!"