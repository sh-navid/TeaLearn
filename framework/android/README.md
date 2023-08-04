# TeaLearn
## Android
- Imported from `https://github.com/sh-navid/Instructor.Headlines/blob/master/android/ANDROID.md`

- [FreshView](/example/FreshView.java)


## [CONTINUE FROM HERE]
https://www.tutorialspoint.com/android/android_acitivities.htm



Android is an open source and Linux-based operating system.  
The first beta version of the Android SDK was released by Google in 2007 where as the first commercial version, Android 1.0, was released in September 2008.  
Dalvik Virtual Machine is a kind of Java Virtual Machine specially designed and optimized for Android.  

## Android OS
From top to bottom:
- __Apps__ − Browser, Camera, Alarm, ...
- __App framework__ − Activity Manager, Window Manager, ...
- __Libs__ (SQLite, SSL, OpenGLES, ...) + __Android runtime__ (Core Libes + DVM)
- __Kernel__ − Power Management, Camera Driver, BluT Driver, ...

## Application Framework
- __Activity Manager__ − Controls all aspects of the application lifecycle and activity stack.
- __Content Providers__ − Allows applications to publish and share data with other applications.
- __Resource Manager__ − Provides access to non-code embedded resources such as strings, color settings and user interface layouts.
- __Notifications Manager__ − Allows applications to display alerts and notifications to the user.
- __View System__ − An extensible set of views used to create application user interfaces.


## Application components
- __Activities__ − They dictate the UI and handle the user interaction to the smart phone screen, in-short Activity performs actions on the screen.
~~~java
public class MainActivity extends Activity {}
~~~
- __Services__ − They handle background processing associated with an application. For example, a service might play music in the background while the user is in a different application, or it might fetch data over the network without blocking user interaction with an activity.
~~~java
public class MyService extends Service {}
~~~
- __Broadcast Receivers__ − They handle communication between Android OS and applications. Broadcast Receivers simply respond to broadcast messages from other applications or from the system.
~~~java
public class MyReceiver extends BroadcastReceiver {
   public void onReceive(context,intent) {}
}
~~~
- __Content Providers__ − They handle data and database management issues. A content provider component supplies data from one application to others on request.
~~~java
public class MyContentProvider extends ContentProvider {
   public void onCreate() {}
}
~~~
- __Fragments__ − Represents a portion of user interface in an Activity.	
- __Views__ − UI elements that are drawn on-screen including buttons, lists forms etc.	
- __Layouts__ − View hierarchies that control screen format and appearance of the views.	
- __Intents__ − Messages wiring components together.	
- __Resources__ − External elements, such as strings, constants and drawable pictures.
- __Manifest__ − Configuration file for the application.

### Manifest
Minimum manifest. The action for the intent filter is named __android.intent.action.MAIN__ to indicate that this activity serves as the entry point for the application. The category for the intent-filter is named __android.intent.category.LAUNCHER__ to indicate that the application can be launched from the device's launcher icon.
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">

   <application
      android:allowBackup="true"
      android:icon="@mipmap/ic_launcher"
      android:label="@string/app_name"
      android:supportsRtl="true"
      android:theme="@style/AppTheme">
      
      <activity android:name=".MainActivity">
         <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
         </intent-filter>
      </activity>
   </application>
</manifest>
~~~
Tags which you will use in your manifest file to specify different Android application components:
~~~ xml
<service> elements for services
<activity> elements for activities
<receiver> elements for broadcast receivers
<provider> elements for content providers
~~~

### String
The strings.xml file is located in the res/values directory.
~~~xml
<resources>
   <string name="app_name">App Name</string>
   <color name="color_red">#ff0000</color>
</resources>

/*Access it in XML*/
android:textColor="@color/color_red"

/*Access it in Java*/
txtView.setText(R.string.app_name);
~~~

### Layout
The activity_main.xml is a layout file available in res/layout directory.

### Android resources
- __drawable/__ − R.drawable class, bitmaps, shapes, ...
- __layout/__ − R.layout class.
- __values/__ − 
    - __arrays.xml__, R.array class.
    - __integers.xml__, R.integer class.
    - __bools.xml__, R.bool class.
    - __colors.xml__, R.color class.
    - __dimens.xml__, R.dimen class.
    - __strings.xml__, R.string class.
    - __styles.xml__, R.style class.
- __color/__ − R.color class.
- __anim/__ − R.anim class.
- __menu/__ − R.menu class, define application menus, such as an Options Menu, Context Menu.
- __raw/__ − Resources.openRawResource(), any raw format file
- __xml/__ − Resources.getXML(), can be use at runtime to get xml files
#### Specify configuration-specific alternatives
```res/<resources_name>-<config_qualifier>```  
- drawable-hdpi/

### Activities
- Activity-Life-Cycle
   - ___CHECK THE VALIDITY OF THIS FLOW !!___

<pre>
                        (Activity Lunched)
                                ↓
                           [onCreate()]
                                ↓
                           [onStart()]                      [onRestart]
                                ↓
                           [onResume()]
                                ↓
(App Process Killed)    (Activity Running)
                                ↓
  Apps with higher              ↓
  priority needs      ←    [onPause()]
  memory                        ↓
                                ↓
                      ←    [onStop()]
                                ↓
                           [onDestroy()]
                                ↓
                        (Activity shutdown)
</pre>

- __onStart()__ − This callback is called when the activity becomes visible to the user.

## Usefull
[Convert from aab to apk][1]

## [Compile][2] | Run directy in android using dalvik
>>FIXME: test this later 
~~~java
public class Hello
{
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
~~~
~~~markdown
javac Hello.java
dx --dex --output=classes.dex Hello.class
zip Hello.zip classes.dex
adb push Hello.zip /sdcard/
adb shell dalvikvm -cp /sdcard/Hello.zip Hello
~~~

## [Build an APK from CMD][3]
-


[1]: https://stackoverflow.com/questions/50419286/install-android-app-bundle-on-device
[2]: https://stackoverflow.com/questions/8733064/how-to-invoke-a-java-class-like-j2se-jvm-does-in-android-on-a-rooted-device
[3]: https://www.apriorit.com/dev-blog/233-how-to-build-apk-file-from-command-line