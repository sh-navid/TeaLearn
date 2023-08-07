#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Operators like << and >>
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //left operand is cout object, << is operator, right operand is a string
    std::cout << "Hello";

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Arithmetic Operatiors
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    std::cout << endl
              << "12+12: " << 12 + 12;
    std::cout << endl
              << "12-12: " << 12 - 12;
    std::cout << endl
              << "12*12: " << 12 * 12;
    std::cout << endl
              << "12/12: " << 12 / 12;
    std::cout << endl
              << "12%12: " << 12 % 12;

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Inc/Dec Operatiors
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    int inc = 12;
    inc++;
    std::cout << endl
              << "++: " << inc;
    inc--;
    std::cout << endl
              << "--: " << inc;

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Relational Operators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    std::cout << endl
              << "12==12 " << (12 == 12);
    std::cout << endl
              << "12!=12 " << (12 != 12);
    std::cout << endl
              << "12>12 " << (12 > 12);
    std::cout << endl
              << "12<12 " << (12 < 12);
    std::cout << endl
              << "12>=12 " << (12 >= 12);
    std::cout << endl
              << "12<=12 " << (12 <= 12);

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Logical Operators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    std::cout << endl
              << "1&&0 " << (1 && 0);
    std::cout << endl
              << "1&&1 " << (1 && 1);
    std::cout << endl
              << "1||0 " << (1 || 0);
    std::cout << endl
              << "1||1 " << (1 || 1);
    std::cout << endl
              << "!1 " << (!1);
    std::cout << endl
              << "!0 " << (!0);
    std::cout << endl
              << "!true " << (!true);

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Bitwise Operators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //0  - 0000       -       8  - 1000
    //1  - 0001       -       9  - 1001
    //2  - 0010       -       10 - 1010
    //3  - 0011       -       11 - 1011
    //4  - 0100       -       12 - 1100
    //5  - 0101       -       13 - 1101
    //6  - 0110       -       14 - 1110
    //7  - 0111       -       15 - 1111

    std::cout << endl                  //6<<1 -> 12 | 0000-0110<<1 -> 0000-1100
              << "6<<1: " << (6 << 1); //Binary Left Shift Operator
    std::cout << endl                  //8>>3 ->  1 | 0000-1000>>3 -> 0000-0001
              << "8>>3: " << (8 >> 3); //Binary Right Shift Operator
    std::cout << endl                  //9>>2 ->  2 | 0000-1001>>2 -> 0000-0010
              << "9>>2: " << (9 >> 2); //Binary Right Shift Operator

    //---------------------------------------------------------------
    //https://stackoverflow.com/questions/791328/how-does-the-bitwise-complement-operator-tilde-work
    //~i == -(i+1)
    //Example:
    //~2 = -3
    std::cout << endl
              << "~2: " << (~2); //Binary One's Complement Operator

    //2 in binary is 00000010
    //Its 1's complement is 11111101
    //subtract 1 from that is 11111101-1 = 11111100
    //its negetive 00000011 = 3
    //first sign of 11111100 from left is 1 means negetive number
    //so ~2 is -3

    //---------------------------------------------------------------
    //0000-1010 -> 10
    //0000-0101 -> 5
    //---------------
    //0000-0000 -> 0  & (AND)
    //0000-1111 -> 15 | (OR)
    //0000-1111 -> 15 ^ (XOR)

    std::cout << endl
              << "10 & 5: " << (10 & 5);
    std::cout << endl
              << "10 | 5: " << (10 | 5);
    std::cout << endl
              << "10 ^ 5: " << (10 ^ 5);

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Assignment Operators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    int num = 10;
    num += 10;
    std::cout << endl
              << "+= " << num;
    num -= 5;
    std::cout << endl
              << "-= " << num;
    num *= 2;
    std::cout << endl
              << "*= " << num;
    num /= 2;
    std::cout << endl
              << "/= " << num;
    num = 45;
    num %= 2;
    std::cout << endl
              << "%= " << num;
    num = 6; //6<<2 => 00000110<<2 => 00011000 => 16+8 => 24
    num <<= 2;
    std::cout << endl
              << "<<= " << num;

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Misc Operators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Comma Operator
    num = 12;
    num = (++num, num + 10);
    std::cout << endl
              << "comma: " << num;

    //---------------------------------------------------------------
    //Sizeof Operator
    std::cout << endl
              << "sizeof: " << sizeof(num);

    //---------------------------------------------------------------
    //* and & Operators
    num = 60;
    int *ptr;
    ptr = &num;
    *ptr += 1;
    std::cout << endl
              << "num: " << num << " ptr: " << ptr << " *ptr: " << *ptr << " &ptr: " << &ptr;

    //---------------------------------------------------------------
    //:? Conditional Expression
    num = 10 > 5 ? 1 : 0;
    std::cout << endl
              << "?: " << num;

    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //Manipulators
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //are operators used in C++ for formatting output.
    //- endl
    //- setw(x) -> is in <iomanip>
    //- setfill('*')
    std::cout << endl
              << setw(20) << 100000;
    std::cout << endl
              << setw(20) << 10000;
    std::cout << endl
              << setw(20) << 1000;
    std::cout << endl
              << setw(20) << 100;
    std::cout << endl
              << setw(20) << setfill('*') << ""; //important to end with ""
}