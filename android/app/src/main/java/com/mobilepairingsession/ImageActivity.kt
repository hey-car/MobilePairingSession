package com.mobilepairingsession

import android.app.Activity
import android.os.Bundle
import android.widget.ImageView
import com.squareup.picasso.Picasso

class ImageActivity : Activity() {
    private var imageURL: String? = null
    private lateinit var imageView: ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_image)

        imageURL = "https://images.dog.ceo/breeds/puggle/IMG_074532.jpg"

        Picasso.get().isLoggingEnabled = true
        imageView = findViewById(R.id.imageView)
        imageView.apply {
            Picasso.get().load(imageURL).into(this)
        }
    }
}