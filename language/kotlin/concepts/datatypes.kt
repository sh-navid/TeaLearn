fun main(){
    var b:Boolean = true
    println(b)


    var c:Char = 'R'
    println(c)


    var s:String = "Hello" // cannot use "'"
    println(s)


    // var b:Byte = 100 // error: conflicting declarations: var b: Boolean, var b: Byte
    var B:Byte = 100
    println(B)


    // var s:Short = 65536 // error: conflicting declarations: var s: String, var s: Short
    // var sh:Short = 65536 // error: the integer literal does not conform to the expected type Short
    var sh:Short = 1000
    println(sh)


    // var i:Int = 12765871213453146236325 // error: the value is out of range
    var i:Int = 12765871
    println(i)


    var L:Long = 1276587112451253
    println(L)


    // var f:Float = 122223.400004 // error: the floating-point literal does not conform to the expected type Float
    var f:Float = 122223.400004f
    println(f)
    // Out: 122223.4


    var d:Double = 122223.400004
    println(d)
    // Out: 122223.400004


    var fe:Float = 44e55f
    println(fe)
    // Out: Infinity


    var de:Double = 44e55
    println(de)
    // Out: 4.4E56
}