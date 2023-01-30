package com.onboarding.notification;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNCKNotificationModule extends ReactContextBaseJavaModule {
    String notificationChannelId = "New_Channel";

    public RNCKNotificationModule(ReactApplicationContext context) {
        super(context);

        createNotificationChannel();
    }

    @NonNull
    @Override
    public String getName() {
        // We will access this module as "RNCKNotification" in Javascript
        return "RNCKNotification";
    }

    // Annotated functions that will be accessible from JS, with the same name and signature
    @ReactMethod
    public void showNotification(String title, String content) {
        Log.d("RNCKNotification", "showing notification...");

        // implementation detail of this method
        NotificationCompat.Builder builder = new NotificationCompat.Builder(getReactApplicationContext(), notificationChannelId)
                .setSmallIcon(android.R.drawable.arrow_up_float)
                .setContentTitle(title)
                .setContentText(content)
                .setPriority(4);

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(getReactApplicationContext());

        Log.d("enabled?", Boolean.toString(notificationManager.areNotificationsEnabled()));

        notificationManager.notify(9999, builder.build()); // Show notification
        Log.d("RNCKNotification", "Shown. In theory");
    }

    private void createNotificationChannel() {
        Log.d("RNCKNotification", "Attempting notifications channel creation...");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            CharSequence name = "Native Notifications Channel";
            String description = "RNCK Notifications";
            int importance = NotificationManager.IMPORTANCE_HIGH;

            NotificationChannel channel = new NotificationChannel(notificationChannelId, name, importance);
            channel.setDescription(description);

            NotificationManager notificationManager = getReactApplicationContext().getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);

            Log.d("RNCKNotification", "Notification channel created!");
        } else {
            Log.d("RNCKNotification", "Notification channel HAS NOT BEEN created!");
        }
    }
}