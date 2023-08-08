class Singleton private constructor(){
    companion object{
        private var instance:Singleton? = null

        fun getInstance():Singleton{
            if(this.instance == null){
                this.instance = Singleton()
                println("Instance created")
            }

            return instance!!;
        }
    }

    fun func(){
        println("Do something")
    }
}

fun main(){
    println("Singleton")
    Singleton.getInstance().func()
    Singleton.getInstance().func()
    Singleton.getInstance().func()
}

/*
 Output:

 Singleton
 Instance created
 Do something
 Do something
 Do something
 */