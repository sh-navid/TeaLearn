class Gun(val bullets:Int, val color:String, val features:List<String>){
    class Builder{
        private var bullets:Int = 0
        private var color:String = "#212121"
        private var features = listOf<String>()

        fun setBullets(bullets:Int):Builder{
            this.bullets = bullets
            return this
        }

        fun setColor(color:String):Builder{
            this.color = color
            return this
        }

        fun addFeature(feature:String):Builder{
            this.features += feature
            return this
        }

        fun build():Gun{
            require(this.bullets<=0){"Gun needs at least one bullet"}
            return Gun(bullets,color,features)
        }
    }
}

fun main(){
    val gun = Gun.Builder()
                 .setBullets(0)
                 .setColor("Green")
                 .addFeature("Heavy")
                 .addFeature("Portable")
                 .build()


    println(gun.bullets)
    println(gun.color)
    println(gun.features)
}