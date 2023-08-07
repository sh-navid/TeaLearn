#include <iostream>
//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
//Comments
//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
/*This is comment*/
//Second type of comment

//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
//Constants
//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
#define CONSTANT1 12 //using #define preprocessor

int main()
{
	const int CONSTANT2 = 13; //using const keyword
	int const CONSTANT3 = 14; //using const keyword

	std::cout << "CONSTANTS" << std::endl
			  << CONSTANT1 << std::endl
			  << CONSTANT2 << std::endl
			  << CONSTANT3 << std::endl;

	//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
	//Primary(Built-in) DataTypes
	//▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
	int i = 10;
	float f = 10.1f;
	double d = 10.001;
	bool b = true;
	std::cout << i << std::endl
			  << f << std::endl
			  << d << std::endl
			  << b << std::endl;

	//-128 to 127 || 0 - 255
	char ch = 'A';
	std::cout << ch << std::endl;

	//1 byte
	//-128 to 127
	signed char s = 27;
	std::cout << s << std::endl;

	//1 byte -- 0 to 255
	unsigned char u = -12;
	std::cout << u << std::endl;
}