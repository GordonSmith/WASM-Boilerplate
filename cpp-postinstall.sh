#!/bin/bash
if [ ! -d "./emsdk" ] 
then
    git clone https://github.com/emscripten-core/emsdk.git
fi
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
