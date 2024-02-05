package com.example.saloon_version_0.activity;

import static android.content.ContentValues.TAG;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.provider.SyncStateContract;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.Toast;


import com.example.saloon_version_0.BaseUrl.Constant;
import com.example.saloon_version_0.R;
import com.example.saloon_version_0.adapter.ServicesListAdapter;
import com.example.saloon_version_0.backendservices.CustomerService;
import com.example.saloon_version_0.backendservices.ProductList;
import com.example.saloon_version_0.entity.Products;
import com.example.saloon_version_0.fragment.CartFragment;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class AMaleActivity extends AppCompatActivity
{
    private RecyclerView recyclerView;
    private ServicesListAdapter servicesListAdapter;
    private List<Products> pList;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_amale);

        Objects.requireNonNull(getSupportActionBar()).setTitle("Back");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        recyclerView = findViewById(R.id.recyclerView);
        pList = new ArrayList<>();
        loadServices();

        servicesListAdapter = new ServicesListAdapter(this,pList);
        recyclerView.setAdapter(servicesListAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
    }

    private void loadServices()
    {
        new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(Constant.BASE_URL)
                .build()
                .create(ProductList.class)
                .getAllProductsByCategory("A")
                .enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response)
                    {
                        JsonArray array = response.body().getAsJsonArray("data");
                        JsonObject object;
                        if (array.size() > 0) {
                            for (int i = 0; i < array.size(); i++) {
                                object = array.get(i).getAsJsonObject();
                                Log.e(TAG, "onResponse: " + object);
                                Products products = new Products();

                                products.setProduct_Name(object.get("product_Name").getAsString());
                                products.setProduct_price(object.get("price").getAsDouble());

                                pList.add(products);
                                Log.e(TAG, "onResponse: " + pList);

                            }
                            servicesListAdapter.notifyDataSetChanged();
                        }

                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t)
                    {
                        Toast.makeText(AMaleActivity.this, "Failed", Toast.LENGTH_SHORT).show();
                    }
                });


    }

    public void goToCart(View view)
    {
        //startActivity(new Intent(AMaleActivity.this,CartFragment.class));
        Fragment fragment = new CartFragment();
        FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        fragmentTransaction.replace(R.id.constraint,fragment).commit();
    }

}

