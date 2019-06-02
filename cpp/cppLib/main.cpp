#include "main.hpp"
#include <emscripten.h>

int x = 0;

int Foo::getVal()
{
    return x;
}
void Foo::setVal(int v)
{
    _var = v;
}

Bar::Bar(long val)
{
    EM_ASM(console.log('Bar construct'););
    x = 100;
}

Bar::~Bar()
{
    EM_ASM(console.log('Bar desturct'););
    x = 50;
}

void Bar::doSomething()
{
    EM_ASM(console.log('Bar do stuff'););
}

//  Include JS Glue  ---
#include "main_glue.cpp"
