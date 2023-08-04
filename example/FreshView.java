import android.content.Context;
import android.graphics.Canvas;
import android.view.MotionEvent;
import android.view.View;

/**
 * Created by   sh-navid    on 11/11/2015.
 * Updated by   sh-navid    on 30/11/2020.
 * Publised by  sh-navid    on 22/12/2020.
 * https://github.com/sh-navid/Instructor.Headlines/blob/master/android/FreshView.java
 */
@SuppressWarnings("unused")
public abstract class FreshView extends View  {
    @SuppressWarnings("FieldCanBeLocal")
    private float mx, my;
    private boolean isTouchedDown, isTouchMoved;
    private double previous;
    private double framePeriod;
    private double lag;

    public FreshView(Context context, int fps) {
        super(context);
        setFramePeriod(fps);
        calculateTouchThreshold();
        lag = 0;
        previous = System.currentTimeMillis();
    }

    public void setFramePeriod(int fps) {
        this.framePeriod = 1000f / fps;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                mx = (int) event.getX();
                my = (int) event.getY();
                isTouchedDown = true;
                isTouchMoved = false;
                onTouchDown(event);
                break;
            case MotionEvent.ACTION_UP:
                isTouchedDown = false;
                onTouchUp(event);
                if (!isTouchMoved) {
                    onTouchUpWithoutMovement(event);
                }
                break;
            case MotionEvent.ACTION_MOVE:
                if (isTouchedDown) {
                    //float xt = event.getX() - mx;
                    //float yt = event.getY() - my;
                    mx = event.getX();
                    my = event.getY();
                    onTouchMove(mx, my, event);
                }
                break;
        }
        return true; //This line gets the coordinates all the time
    }

    protected abstract void onTouchMove(float mx, float my, MotionEvent event);

    protected abstract void onTouchUpWithoutMovement(MotionEvent event);

    protected abstract void onTouchUp(MotionEvent event);

    protected abstract void onTouchDown(MotionEvent event);

    protected abstract void calculateTouchThreshold();

    @Override
    public void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        ///Sleep scope started
        double off = previous + framePeriod;
        double now = System.currentTimeMillis();
        if (off > now)
            try {
                Thread.sleep((long) (off - now));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        ///Sleep scope ended
        double current = System.currentTimeMillis();
        double elapsed = current - previous;
        previous = current;
        lag += elapsed;
        //onInput();//Step1
        while (lag >= framePeriod) {
            onUpdate();//Step2
            lag -= framePeriod;
        }
        //renderState();//Step3
        onRender(canvas);
        onTick();
        postInvalidate();
    }

    protected abstract void onRender(Canvas canvas);

    protected abstract void onTick();

    protected abstract void onUpdate();
}