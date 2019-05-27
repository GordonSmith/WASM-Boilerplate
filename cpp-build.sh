#!/bin/bash
source ./emsdk/emsdk_env.sh
if [ ! -d "./build" ] 
then
    mkdir build
fi
cd ./build
cmake .. -DCMAKE_TOOLCHAIN_FILE="$EMSCRIPTEN/cmake/Modules/Platform/Emscripten.cmake" -DCMAKE_BUILD_TYPE=MinSizeRel
cmake --build .
