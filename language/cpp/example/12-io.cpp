//cin, cout
//get, put
//getline, write

#include <iostream>

int main()
{
    /*
    std::cout << "cin, cout" << std::endl;
    char c;
    while (c != 'q')
    {
        std::cout << "Type char and press Enter (q for quit):" << std::endl;
        std::cin >> c;
        std::cout << "\n\n";
    }
    */

    /*
    std::cout << "get, put" << std::endl;
    char c;
    std::cin.get(c);
    while (c != 'q')
    {
        std::cout << c;
        std::cin.get(c);
    }
    std::cout.put('Q');
    */

    /*
    std::cout << "std::getline" << std::endl;
    std::cout << "Type your name and press Enter:" << std::endl;
    std::string name;
    std::getline(std::cin, name);
    std::cout << "Name is: " << name << std::endl;
    */

    std::cout << "cin.getline, cout.write" << std::endl;
    const int MAX = 4;
    char name[MAX];
    std::cin.getline(name, MAX);
    std::cout.write(name, MAX);
    std::cout << std::endl;
}