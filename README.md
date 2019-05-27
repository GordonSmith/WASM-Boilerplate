# WASM-Boilerplate
_Boilplate project for learning WebAssembly._

## Key Technologies Used
* CMake
* c++
* WebIDL
* Emscriptem
* Typescript
* RollupJS

##  Prerequisite
All instructions were tested on Windows (1903) with WSL + Ubuntu-18.04.

##  Build instructions
* npm install
* npm run build

##  Demo Web Page
* npm run serve

---

##  Manual installation (personal reference)

* Install CMake / Python / c++ dependencies:
```
sudo apt update
sudo apt upgrade
sudo apt install nodejs npm git cmake
sudo apt install python2.7 python-pip
sudo apt install gcc-multilib g++-multilib
```

* Install emscripten
```
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
```

* Set ENV vars and paths (still in emsdk folder)
```
source ./emsdk_env.sh
```
**Note:**  I had to run the install + activate twice before `source ./emsdk_env.sh` worked cleanly (I also deleted the `emsdk/emscriptem` folder)

* Test emcc has been activated with correct path configuration
```
emcc --version
```

* CMake Build
```
cd ..
mkdir build
cd build
cmake .. -DCMAKE_TOOLCHAIN_FILE="$EMSCRIPTEN/cmake/Modules/Platform/Emscripten.cmake" -DCMAKE_BUILD_TYPE=MinSizeRel
cmake --build .
```
Note:  Some alternative build configurations:
* `DCMAKE_BUILD_TYPE=Debug`
* `DCMAKE_BUILD_TYPE=Release`
