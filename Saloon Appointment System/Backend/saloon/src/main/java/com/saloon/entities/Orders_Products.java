package com.saloon.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Orders_Products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int kid;

	@ManyToOne
	@JoinColumn(name="order_Id")
	@JsonIgnoreProperties({"customers","order_productList","date","branch"})
	private Orders order;
	
	@ManyToOne
    @JoinColumn(name="product_Id")
    @JsonIgnoreProperties("order_productList")
 	private Products product;
	

	public int getKid() {
		return kid;
	}
	public void setKid(int kid) {
		this.kid = kid;
	}
	public Orders getOrder() {
		return order;
	}
	public void setOrder(Orders order) {
		this.order = order;
	}
	public Products getProduct() {
		return product;
	}
	public void setProduct(Products product) {
		this.product = product;
	}

//	@Override
//	public String toString() {
//		return "Order_Product [kid=" + kid + ", order=" + order + ", product=" + product + "]";
//	}
	
}
