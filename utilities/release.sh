#/usr/bin/bash

echo ----------------------------------------------------------------
echo Web Site - Release
echo ----------------------------------------------------------------

alias yuiCompressor="java -jar /Users/KelSolaar/Documents/Development/Tools/yuiCompressor/build/yuicompressor-2.4.2.jar"
alias python=/Library/Frameworks/Python.framework/Versions/2.7/bin/python

#! Local release.
echo ----------------------------------------------------------------
echo Release - Begin
echo ----------------------------------------------------------------
rm -rf online/*
cp  -r ../src/css ./online/
cp  -r ../src/libraries ./online/
cp  -r ../src/scripts ./online/
mkdir -p ./online/resources
cp  -r ../src/resources/nodes ./online/resources/
cp  -r ../src/resources/pages ./online/resources/
cp  -r ../src/resources/pdfs ./online/resources/
cp  -r ../src/resources/pictures ./online/resources/
cp  -r ../src/resources/portfolio ./online/resources/
cp ../src/index.html ./online/
echo ----------------------------------------------------------------
echo Release - End
echo ----------------------------------------------------------------

#! Javascript files compression.
echo ----------------------------------------------------------------
echo Javascript Files Compression - Begin
echo ----------------------------------------------------------------
yuiCompressor --type js -o ./online/scripts/common.js ./online/scripts/common.js
yuiCompressor --type js -o ./online/scripts/portfolio.js ./online/scripts/portfolio.js
echo ----------------------------------------------------------------
echo Javascript Files Compression - End
echo ----------------------------------------------------------------

#! CSS files compression.
echo ----------------------------------------------------------------
echo CSS Files Compression - Begin
echo ----------------------------------------------------------------
yuiCompressor --type css -o ./online/css/colorbox.css ./online/css/colorbox.css
yuiCompressor --type css -o ./online/css/common.css ./online/css/common.css
yuiCompressor --type css -o ./online/css/portfolio.css ./online/css/portfolio.css
yuiCompressor --type css -o ./online/css/social.css ./online/css/social.css
yuiCompressor --type css -o ./online/css/utilities.css ./online/css/utilities.css
echo ----------------------------------------------------------------
echo CSS Files Compression - End
echo ----------------------------------------------------------------

#! Release cleanup.
echo ----------------------------------------------------------------
echo Cleanup - Begin
echo ----------------------------------------------------------------
python ../utilities/recursiveRemove.py ./online/ .pyc
python ../utilities/recursiveRemove.py ./online/ .pyo
python ../utilities/recursiveRemove.py ./online/ .DS_Store
python ../utilities/recursiveRemove.py ./online/ Thumbs.db
echo ----------------------------------------------------------------
echo Cleanup - End
echo ----------------------------------------------------------------