//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
//Preprocessor directive
//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
#include <iostream>

//main function where program execution begins
int main()
{//Two curly brackets "{…}" are used to group all statements
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //CIN, COUT
    //▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
    //We used std:: before cout. This is required when we use #include <iostream>.
    //std is a namespace
    std::cout << "Enter a number:" << std::endl; //A C++ statement

    int in;
    std::cin >> in;
    std::cout << "Input number is: " << in << std::endl;

    return 0;
}

//cin: standard input stream
//cout: standard output stream