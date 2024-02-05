package com.saloon.Controllers;

import java.util.HashMap; 
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.CascadeType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saloon.daos.BranchDao;
import com.saloon.daos.CustomerDao;
import com.saloon.daos.ReviewDao;
import com.saloon.entities.Branch;
import com.saloon.entities.Customers;
import com.saloon.entities.Review;

@CrossOrigin
@RestController
public class ReviewController {
	@Autowired
	private ReviewDao reviewDao;
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	private BranchDao branchDao;
	
	@GetMapping("/review")
	public List<Review> getAllReview() {
		List<Review> rlist = reviewDao.findAll();
		return rlist;
	}
	
	
//	@PostMapping("/register")
//	public Customers registerCus(@RequestBody Customers cus) {
//		Customers cusdb = customerDao.save(cus);
//		return cusdb;
//	}
	
	
	@PostMapping("addreview/{cid}/{bid}")
	public Review addReviewByCustomerId(@PathVariable("cid")int cid,@PathVariable("bid")int bid, @RequestBody Review rev){
		
			
			Customers cus =customerDao.findById(cid).orElseThrow();
			Branch br = branchDao.findById(bid).orElseThrow();
			
			Review r = new Review(rev.getrId(),rev.getReview(),cus,br);
			Review review = reviewDao.save(r); 
			
		
		return review;
	}
	

	
}
