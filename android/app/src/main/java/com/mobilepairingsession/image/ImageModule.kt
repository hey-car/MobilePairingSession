package com.mobilepairingsession.image

import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.*
import com.mobilepairingsession.ImageActivity

class ImageModule(private val mContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(mContext) {

    override fun getName(): String {
        return "Image"
    }

    @ReactMethod
    fun navigate() {
        val imageIntent = Intent(mContext, ImageActivity::class.java)
        imageIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        mContext.startActivity(
            imageIntent,
            Bundle.EMPTY
        )
    }
}
