#/usr/bin/bash

echo ----------------------------------------------------------------
echo Web Site - Release
echo ----------------------------------------------------------------

alias yuiCompressor="java -jar /Users/KelSolaar/Documents/Developement/Tools/yuiCompressor/build/yuicompressor-2.4.2.jar"
alias python=/Library/Frameworks/Python.framework/Versions/2.6/bin/python

#! Local Release.
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
cp ../src/_index.html ./online/
echo ----------------------------------------------------------------
echo Release - End
echo ----------------------------------------------------------------

#! Javascript Files Compression.
echo ----------------------------------------------------------------
echo Javascript Files Compression - Begin
echo ----------------------------------------------------------------
yuiCompressor --type js -o ./online/scripts/common.js ./online/scripts/common.js
yuiCompressor --type js -o ./online/scripts/portfolio.js ./online/scripts/portfolio.js
echo ----------------------------------------------------------------
echo Javascript Files Compression - End
echo ----------------------------------------------------------------

#! CSS Files Compression.
echo ----------------------------------------------------------------
echo CSS Files Compression - Begin
echo ----------------------------------------------------------------
yuiCompressor --type css -o ./online/css/colorbox.css ./online/css/colorbox.css
yuiCompressor --type css -o ./online/css/common.css ./online/css/common.css
yuiCompressor --type css -o ./online/css/portfolio.css ./online/css/portfolio.css
yuiCompressor --type css -o ./online/css/utilities.css ./online/css/utilities.css
echo ----------------------------------------------------------------
echo CSS Files Compression - End
echo ----------------------------------------------------------------


#! Release Cleanup.
echo ----------------------------------------------------------------
echo Cleanup - Begin
echo ----------------------------------------------------------------
python ../utilities/webSite_recursiveRemove.py ./online/ .pyc
python ../utilities/webSite_recursiveRemove.py ./online/ .pyo
python ../utilities/webSite_recursiveRemove.py ./online/ .DS_Store
python ../utilities/webSite_recursiveRemove.py ./online/ Thumbs.db
echo ----------------------------------------------------------------
echo Cleanup - End
echo ----------------------------------------------------------------