package com.saloon.Controllers;

import java.time.LocalDate;
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

import com.saloon.dtos.CustomRequest;
import com.saloon.dtos.approvepaidDto;
import com.saloon.dtos.paidDto;
import com.saloon.entities.Branch;
import com.saloon.entities.Customers;
import com.saloon.entities.Date;
import com.saloon.entities.Orders;
import com.saloon.entities.Orders_Products;
import com.saloon.daos.BranchDao;
import com.saloon.daos.CustomerDao;
import com.saloon.daos.DateDao;
import com.saloon.daos.OrderDao;
import com.saloon.daos.Order_Products;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	private OrderDao orderDao;
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	private BranchDao branchDao;
	@Autowired
	private DateDao dateDao;
	
	@Autowired
	private Order_Products opdao;

	@GetMapping("/orders")
	public List<Orders> getAllOrders() {
		List<Orders> olist = orderDao.findAll();
		return olist;
	}

	@PostMapping("/addorder/{cid}/{bid}")
	public Orders addOrder(@PathVariable("cid")int id,@PathVariable("bid")int bid, @RequestBody CustomRequest request) {
		Date date =null;
		Customers ocus = customerDao.findById(id).orElseThrow();
		request.getOrders().setCustomers(ocus);
		Branch branch = branchDao.findById(bid).orElseThrow();
	    request.getOrders().setBranch(branch);
	    request.getOrders().setDate(request.getDate());
	    Optional<Date> d=dateDao.findByDate(request.getDate().getDate());
	    if(d.isPresent()) {
	    	date=d.get();
	    }
	    else{
	    	date= dateDao.save(request.getDate());
	    }
	    //Date d=dateDao.findById(request.getDate().getId()).orElseThrow();
	    //date=d;
		Orders persistedorder=orderDao.save((request.getOrders()));
		
		request.getProducts().forEach(i->{
			Orders_Products op=new Orders_Products();
			op.setOrder(persistedorder);
			op.setProduct(i);
			opdao.save(op);
		});	
		Optional<Orders> updatedOrder=orderDao.findById(persistedorder.getOrder_Id());
		if(updatedOrder.isPresent())
		return updatedOrder.get();
		else
			return null;
	}

	@DeleteMapping("/order/{ordid}")
	public void DeleteById(@PathVariable("ordid") int id) {
		orderDao.deleteById(id);
	}

	@GetMapping("/getbyidorder/{ordid}")
	public Orders getOrdersById(@PathVariable("ordid") int id) {
		@SuppressWarnings("deprecation")
		Orders or = orderDao.getById(id);
		return or;
	}

	@PutMapping("/approved/{orderid}")
	public Map<String, Object> updateuser(@PathVariable("orderid") int id, @RequestBody approvepaidDto apd) {
		// System.out.println("controller:"+u.toString());
		System.out.println("CID:" + apd);

		Map<String, Object> result = new HashMap<>();
		try {
			Orders ord = orderDao.findById(id).orElseThrow();

			ord.setApproved(apd.getApprove());
			ord.setPaid(apd.getPaid());

			System.out.println("us: " + ord);
			orderDao.save(ord);
			result.put("Status", "success");
			result.put("data", ord);

		} catch (Exception e) {
			e.printStackTrace();
			result.put("Status", "error");
			result.put("message", e.getMessage());
		}
		return result;
	}

	@PutMapping("/paid/{orderid}")
	public Map<String, Object> updateuser(@PathVariable("orderid") int id, @RequestBody paidDto paid) {
		// System.out.println("controller:"+u.toString());
		System.out.println("CID:" + paid.toString());

		Map<String, Object> result = new HashMap<>();
		try {
			Orders ord = orderDao.findById(id).orElseThrow();

			ord.setPaid(paid.getPaidstatus());
			System.out.println("us: " + ord);
			orderDao.save(ord);
			result.put("Status", "success");
			result.put("data", ord);

		} catch (Exception e) {
			e.printStackTrace();
			result.put("Status", "error");
			result.put("message", e.getMessage());
		}
		return result;
	}
}
