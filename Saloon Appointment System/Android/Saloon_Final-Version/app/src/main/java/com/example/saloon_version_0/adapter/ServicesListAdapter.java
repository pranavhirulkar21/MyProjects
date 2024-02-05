package com.example.saloon_version_0.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.saloon_version_0.R;
import com.example.saloon_version_0.entity.Products;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.List;


public class ServicesListAdapter extends RecyclerView.Adapter<ServicesListAdapter.ViewHolder>
{
    Context context;
    List<Products> productsList;


    public ServicesListAdapter(Context context, List<Products> productsList)
    {
        this.context = context;
        this.productsList = productsList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType)
    {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_of_services,null);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position)
    {
        Products products = productsList.get(position);
        holder.ProductName.setText(products.getProduct_Name());
        //holder.ProductPrice.setText((int) products.getProduct_price());

        holder.ProductAdd.setOnClickListener(v -> {
            holder.ProductAdd.setText("Added");
            Toast.makeText(context, holder.ProductName.getText()+" service is added to the cart", Toast.LENGTH_SHORT).show();
        });
    }

    @Override
    public int getItemCount() {
        return productsList.size();
    }

    static class ViewHolder extends RecyclerView.ViewHolder
    {
        TextView ProductName,ProductPrice;
        Button ProductAdd;
        public ViewHolder(@NonNull View itemView)
        {
            super(itemView);
            ProductName = itemView.findViewById(R.id.tvServiceName);
            ProductPrice = itemView.findViewById(R.id.tvServicePrice);
            ProductAdd = itemView.findViewById(R.id.btnAdd);
        }
    }
}
