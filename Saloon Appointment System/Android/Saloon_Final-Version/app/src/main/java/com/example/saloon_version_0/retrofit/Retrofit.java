//package com.example.saloon_version_0.retrofit;
//
//import com.google.gson.Gson;
//
//import retrofit2.converter.gson.GsonConverterFactory;
//
//public class Retrofit
//{
//    private retrofit2.Retrofit retrofit;
//
//    public Retrofit()
//    {
//        intializeRetrofit();
//    }
//
//    private void intializeRetrofit()
//    {
//        retrofit = new retrofit2.Retrofit.Builder()
//                .baseUrl("http://192.168.100.6:4000")
//                .addConverterFactory(GsonConverterFactory.create(new Gson()))
//                .build();
//    }
//
//    public retrofit2.Retrofit getRetrofit()
//    {
//        return retrofit;
//    }
//}
