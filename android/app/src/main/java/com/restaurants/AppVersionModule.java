package com.restaurants;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.restaurants.BuildConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AppVersionModule extends ReactContextBaseJavaModule {
    Context context;
    private PackageInfo getPackageInfo() throws Exception {
        return getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
    }
    AppVersionModule(ReactApplicationContext context){
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "AppVersionModule";
    }

    @ReactMethod
    public void getAppVersion(Promise promise) {
        String appVersion;
        try {
            appVersion = getPackageInfo().versionName;
        } catch (Exception e){
            appVersion = "unknown";
        }
        promise.resolve(appVersion);
    }
}
