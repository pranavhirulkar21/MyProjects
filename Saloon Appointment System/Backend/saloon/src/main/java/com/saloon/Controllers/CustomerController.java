package com.saloon.Controllers;

import java.util.List;
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

import com.saloon.daos.CustomerDao;
import com.saloon.daos.OrderDao;
import com.saloon.entities.Customers;

@CrossOrigin
@RestController
public class CustomerController {
	
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	private OrderDao orderDao;
	
	@GetMapping("/customer")
	public List<Customers> getAllUser() {
		List<Customers> clist = customerDao.findAll();
		return clist;
	}
	
	@GetMapping("/customer/login/{pass}")
	public Optional<Customers> getCustomerByEmail(@RequestBody String email, @PathVariable("pass") String password) {
		Optional<Customers> c = customerDao.findByEmailAndPassword(email, password);
		return c;
	}
	
	@PostMapping("/register")
	public Customers registerCus(@RequestBody Customers cus) {
		Customers cusdb = customerDao.save(cus);
		return cusdb;
	}
	
	@PutMapping("/customer/{cusid}")
	public Customers updateMobile(@PathVariable("cusid") int id,@RequestBody Customers cus)  {
		Optional<Customers> customer = customerDao.findById(id);
			   if(customer.isPresent()) {
				   Customers cs = customer.get();
		Customers c= new Customers(id,cs.getFullName(),cs.getEmail(),cus.getMobileNo(),cs.getGender(),cus.getBuilding_No(),cus.getArea_Name(),cus.getPincode(),cus.getPassword());
		  System.out.println("us: "+cus);
		   customerDao.save(c);
		   return c;
		   }
		return null;
	}
	
	@DeleteMapping("/customer/{cusid}")
	public void DeleteById(@PathVariable("cusid")int id) {
		customerDao.deleteById(id);
	}
	
	@GetMapping("/customer/{cusid}")
	public Optional<Customers> getCustomersById(@PathVariable("cusid")int id) {
		
		Optional<Customers> cr = customerDao.findById(id);
		return cr;
	}
	
}
