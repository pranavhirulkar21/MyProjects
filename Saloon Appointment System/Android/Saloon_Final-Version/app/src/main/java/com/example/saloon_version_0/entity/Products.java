package com.example.saloon_version_0.entity;

public class Products
{
    private String product_Id;
    private String product_Name;
    private Double product_price;

    public Products(String product_Id, String product_Name, Double product_price)
    {
        this.product_Id = product_Id;
        this.product_Name = product_Name;
        this.product_price = product_price;
    }

    public Products() {

    }

    public String getProduct_Id() {
        return product_Id;
    }

    public void setProduct_Id(String product_Id) {
        this.product_Id = product_Id;
    }

    public String getProduct_Name() {
        return product_Name;
    }

    public void setProduct_Name(String product_Name) {
        this.product_Name = product_Name;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(Double product_price) {
        this.product_price = product_price;
    }

    @Override
    public String toString()
    {
        return "Products{" +
                "product_Id='" + product_Id + '\'' +
                ", product_Name='" + product_Name + '\'' +
                ", product_price=" + product_price +
                '}';
    }
}
