# TeaLearn
## CPlusPlus
- Imported from `https://github.com/sh-navid/Instructor.Headlines/blob/master/cpp/CPP.md`
- Base CPP information gathered from this [source](https://www.w3schools.in/cplusplus-tutorial/intro/).


### [CONTINUE FROM HERE]
- https://www.w3schools.in/cplusplus-tutorial/data-types/
- FIXME: check every keyword
- FIXME: check every operator


## Concepts
### Four significant principles of OOP:
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### Type-Safe:
Code that accesses only the memory locations it is authorized to access, and only in well-defined, allowable ways. [source](https://www.webopedia.com/definitions/type-safe/#:~:text=Type-Safe.%20Webopedia%20Staff.%20%28adj.%29%20Code%20that%20accesses%20only,an%20object%20that%20is%20invalid%20for%20that%20object.)

C# and VB.NET have Type-safe code. C++ is not type-safe.


## C++
### Building Blocks:
- DataTypes
- Variables
- Literals


### Preprocessor Directive:
It tells the preprocessor to include the contents of iostream header file in the program before compilation.
This file is required for input-output statements.
~~~c++
#include <iostream>
~~~

### Identifiers:
Identifiers are names given to different entries such as variables, structures, and functions.

### Keywords:
Keywords are reserved words which have fixed meaning to the compiler.
- if else break continue
- for while do
- switch case default
- bool true false
- char wchar_t
- const const_cast volatile
- void int float double
- sizeof
- try catch
- goto
- namespace struct class return vistual using inline static static_cast
- private protected public
- asm new this auto enum operator throw explicit delete
- export extern typedef register typeid typename template
- reinterpret_cast union friend mutable dynamic_cast
- short long signed unsigned

### Other reserved words:
- and or xor not
- and_eq or_eq xor_eq not_eq
- bitor bitand compl
			

### Modifiers:
- signed
- unsigned
- long
- short

### Class:
C++ implements data abstraction using a concept called classes.

###	Primary(Built-in) DataTypes:
- character
- integer
- floating point
- boolean
- double floating point
- void
- wide character

### Constants
Constants are like a variable, except that their value never change.

### Namespace
*std* is a namespace. A namespace defines the scope of identifiers which are used in the program.
~~~c++
using namespace std;
~~~

### I/O
- C++ IO is type safe.
- C++ IO operations are based on streams of bytes and are device independent.
- A stream is a sequence of bytes which acts either as a source from which input data can be obtained or as a destination to which output data can be sent.


### .h vs .cpp
For separating the interface from the implementation. The header declares "what" a class (or whatever is being implemented) will do, while the cpp file defines "how" it will perform those features. This reduces dependencies so that code that uses the header doesn't necessarily need to know all the details of the implementation and any other classes/headers needed only for that. This will reduce compilation times and also the amount of recompilation needed when something in the implementation changes [source](https://stackoverflow.com/questions/333889/why-have-header-files-and-cpp-files#:~:text=The%20header%20declares%20%22what%22%20a%20class%20%28or%20whatever,and%20any%20other%20classes%2Fheaders%20needed%20only%20for%20that.).

A more better idea is PIMPLE [source](http://aszt.inf.elte.hu/~gsd/halado_cpp/ch09s03.html). FIXME: _Read about this later_.


### Operators
C++ operator is a symbol that is used to perform mathematical or logical manipulations.
- Arithmetic Operatiors:
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)
    - Modulus (%)
- Inc/Dec Operatiors:
    - Increment (++)
    - Decrement (--)
- Relational Operators:
    - == != > < >= <=
- Logical Operators:
    - && || !
- Bitwise Operators:
    - Binary Left Shift Operator (<<)
    - Binary Right Shift Operator (>>)
    - Binary One's Complement Operator (~) [How this works?](https://stackoverflow.com/questions/791328/how-does-the-bitwise-complement-operator-tilde-work)
        + Positive numbers are represented directly into the memory.
        + Whereas, negative numbers are stored in the form of 2's compliment.
        + ~i == -(i+1)
    - Binary AND Operator (&)
    - Binary XOR Operator (^)
    - Binary OR Operator (|)
- Assignment Operators:
    - =  +=  -=  *=  /=  %=  <<=  >>=  &=  ^=  |=
- Misc Operators:
    - Comma operator (,)
    - Returns the size of an memory location (sizeof())
    - Returns the address of an memory location (&)
    - Pointer to a variable (*)
    - Conditional Expression (?:)
- Manipulators: are operators used in C++ for formatting output.
    - endl is a manipulator operator.
    - setw(x) is a manipulator operator that sets the minimum field width on output.
    - setfill('*')

~~~c++
#include <iostream>
#include <iomanip> //for setw and setfill

std::cout << endl << setw(20) << 100000;
std::cout << endl << setw(20) << 10000;
std::cout << endl << setw(20) << 1000;
std::cout << endl << setw(20) << 100;
std::cout << endl << setw(20) << setfill('*') << "";

//output:
              100000
               10000
                1000
                 100
********************
~~~


### Good to know:
- C++ supports all of C's I/O functions.
- C: stdio (scanf, printf) | c++: iostream (cin, cout), fstream.


### New CPP Notes:
- int main() instead of void main()
- After you import your headers use using namespace std;
- There is no header file like iostream.h, use this as:
~~~cpp
#include <iostream>
~~~
- void main() and iostream.h is only valid for Turbo C++
>>>>>>> cplusplus/master