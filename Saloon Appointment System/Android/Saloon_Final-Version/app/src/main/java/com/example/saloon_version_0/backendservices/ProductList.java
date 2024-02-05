package com.example.saloon_version_0.backendservices;

import com.example.saloon_version_0.entity.Products;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface ProductList
{
    @GET("allproducts")
    //  Call<List<Products>>getAllProducts();
    //  public Call<JsonArray> getAllProducts();
      public Call<JsonObject> getAllProducts();
    //Call<ArrayList<Products>> getAllProducts();


    @GET("Products_Category/{category}")
    public Call<JsonObject> getAllProductsByCategory(@Path("category")String category);

}
