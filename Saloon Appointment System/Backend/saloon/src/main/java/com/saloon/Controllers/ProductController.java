package com.saloon.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saloon.daos.ProductDao;
import com.saloon.entities.Customers;
import com.saloon.entities.Products;

@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	private ProductDao productDao;

	@GetMapping("/allProducts")
	public List<Products> getAllProducts() {
		List<Products> plist = productDao.findAll();
		return plist;
	}
	
	@PostMapping("/addProduct")
	public Products registerPro(@RequestBody Products pro) {
		Products prodb = productDao.save(pro);
		return prodb;
	}

	@GetMapping("/products/gender/{gender}")
	public List<Products> getMaleProducts(@PathVariable("gender") String gender) {
		List<Products> malelist = productDao.getBygender(gender);
		return malelist;
	}
	
	@GetMapping("/femaleProducts")
	public List<Products> getFemaleProducts() {
		List<Products> femalelist = productDao.getBygender("Female");
		return femalelist;
	}

//	@GetMapping("/Products_Category/{product_Id}")
//	public Map<String, Object> getByCategory(@PathVariable("product_Id") String pid) {
//
//		Map<String, Object> result = new HashMap<>();
//		try {
//
//			List<Products> plist = productDao.findByIdStartsWith(pid);
//			// List<Products>plist= productDao.findByproduct_IdStartsWith("P");
//			System.out.println(pid);
//			result.put("Status", "success");
//			result.put("data", plist);
//		} catch (Exception e) {
//			result.put("Status", "error");
//			result.put("message", e.getMessage());
//		}
//		return result;
//	}
	
	@GetMapping("/Products_Category/{product_Id}")
	public List<Products> getByCategory(@PathVariable("product_Id")String id) {
		@SuppressWarnings("deprecation")
		List<Products> plist = productDao.findByIdStartsWith(id);
		return plist;
	}

	@DeleteMapping("/products/{product_Id}")
	public void DeleteProducts(@PathVariable("product_Id")String id) {
		productDao.deleteById(id);
	}

	@PutMapping("/editProduct/{product_Id}")
	public Map<String, Object> editProduct(@RequestBody Products prod, @PathVariable String product_Id) {
		Map<String, Object> presult = new HashMap<>();
		try {
			Optional<Products> p = productDao.findById(product_Id);
			if (product_Id == prod.getProduct_Id()) {
				Products productdb = productDao.save(p);

				presult.put("status", "success");
				presult.put("data", productdb);
			}
		} catch (Exception e) {
			e.printStackTrace();
			presult.put("status", "error");
			presult.put("message", e.getMessage());
		}
		return presult;
	}
}
