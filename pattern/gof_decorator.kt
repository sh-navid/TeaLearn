interface View{
    fun render(text:String):String
}

abstract class BasicText:View{
    override fun render(text:String):String{
        return "[$text]"
    }
}

class ItalicText:BasicText(){
    override fun render(text:String):String{
        return "<i>"+super.render(text)+"<i/>"
    }
}

class BoldText:BasicText(){
    override fun render(text:String):String{
        return "<b>"+super.render(text)+"<b/>"
    }
}

fun main(){
    println(ItalicText().render("hello"))
    println(BoldText().render("hello"))
}

/*
 OUTPUT
 --------------
 <i>[hello]<i/>
 <b>[hello]<b/>
 */