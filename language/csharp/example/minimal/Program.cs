using System;

// Variable, DataType
int i=13;
double d=12.9000000001;
bool b=true;
char c='a';
string s="Test String";
float f=12.9000000001F;
long l=1234567890000001;

// Print
System.Console.WriteLine(i);
System.Console.WriteLine(s);
System.Console.WriteLine(c);
System.Console.WriteLine(d);
System.Console.WriteLine(f);
System.Console.WriteLine(b);
System.Console.WriteLine(l);

// TypeCast
int castValue=(int)d;
System.Console.WriteLine(castValue);

// TypeConvert
System.Console.WriteLine(System.Convert.ToInt16(castValue));
System.Console.WriteLine(System.Convert.ToInt32(castValue));
System.Console.WriteLine(System.Convert.ToInt64(castValue));

// Inputs
System.Console.WriteLine("Write Something:");
string inputValue= System.Console.ReadLine();
System.Console.WriteLine(">"+inputValue);

System.Console.WriteLine("Enter a number:");
System.Console.WriteLine(">"+(Convert.ToInt32(System.Console.ReadLine())+1));