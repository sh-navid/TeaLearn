import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.awt.*;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.util.Map;

public class WebViewExample extends Application {
    @Override
    public void start(Stage primaryStage) {
        initWebView(primaryStage);
    }

    public static void main(String[] args) {
        launch(args);
    }

    private static void initWebView(Stage primaryStage) {
        primaryStage.setTitle("JavaFX WebView Example");
        WebView webView = new WebView();
        webView.getEngine().load("http:\\www.google.com");
        //webView.getEngine().loadContent(readFile("src/main.html"));
        webView.getEngine().setJavaScriptEnabled(true);
        VBox vBox = new VBox(webView);
        Scene scene = new Scene(vBox, 960, 600);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}