package com.saloon.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
//@Table(name="product")
public class Products {
	
	@Id
	private String product_Id;
	private String product_Name;
	private String product_Gender;
	private int price;
	
	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"product","order"})
	private List<Orders_Products> order_productList = new ArrayList<Orders_Products>();

	public Products() {
	}

	public Products(String product_Id, String product_Name, String product_Gender, int price) {
		this.product_Id = product_Id;
		this.product_Name = product_Name;
		this.product_Gender = product_Gender;
		this.price = price;
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
	public String getProduct_Gender() {
		return product_Gender;
	}
	public void setProduct_Gender(String product_Gender) {
		this.product_Gender = product_Gender;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
//	public List<Order_Product> getOrder_productList() {
//		return order_productList;
//	}
//	public void setOrder_productList(List<Order_Product> order_productList) {
//		this.order_productList = order_productList;
//	}
//
//	@Override
//	public String toString() {
//		return "Product [product_Id=" + product_Id + ", product_Name=" + product_Name + ", product_Gender="
//				+ product_Gender + ", price=" + price + ", order_productList=" + order_productList + "]";
//	}
	
}
