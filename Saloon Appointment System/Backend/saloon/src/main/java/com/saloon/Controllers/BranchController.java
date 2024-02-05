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

import com.saloon.daos.BranchDao;
import com.saloon.daos.OrderDao;
import com.saloon.entities.Branch;
import com.saloon.entities.Customers;

@CrossOrigin
@RestController
public class BranchController {

	@Autowired
	private BranchDao branchDao;
	
	@Autowired
	private OrderDao orderDao; 
	
	@GetMapping("/branch")
	public List<Branch> getAllBranch() {
		List<Branch> blist = branchDao.findAll();
		return blist;
	}
	
	@GetMapping("/branch/{braid}")
	public Branch getBranchById(@PathVariable("braid")int id) {
		@SuppressWarnings("deprecation")
		Branch br = branchDao.getById(id);
		return br;
	}
	
	@GetMapping("getReviews/{bid}")
	public Optional<Branch> getReviewById(@PathVariable("bid")int id) {
		
		Optional<Branch> br = branchDao.findById(id);
		return br;
	}
	
//	public Map<String,Object> getReviewBybranch(@PathVariable("bid")int bid){
//		Map<String, Object> result = new HashMap<String, Object>();
//		try {
//			Branch b = branchDao.findById(bid).orElseThrow();
//			
//			System.out.println(b);
//			result.put("data", b);
//			result.put("status", "success");
//		}catch (Exception e) {
//			result.put("Status", "error");
//			result.put("message", e.getMessage()); 
//		}
//		return result;
//	}
	
	@PostMapping("/addBranch")
	public Branch addBranch(@RequestBody Branch bra) {
		Branch bradb = branchDao.save(bra);
		return bradb;
	}
	
//	 @PutMapping("/branch/{braid}")	 
//	 public Branch updateuser(@PathVariable("braid")int id, @RequestBody Branch bra){
//		   System.out.println("BID:"+id);
//		   branchDao.save(bra);
//	 	   return bra;
//	    }
	
//	@PutMapping("/branch/{braid}")
//	public Branch updateMobile(@PathVariable("braid") int id,@RequestBody Branch bra) {
//		Optional<Branch> branch = branchDao.findById(id);
//		   if(branch.isPresent()) {
//			   Branch cs = branch.get();
//			   Branch c= new Branch(id,cs.getFullName(),cs.getEmail(),cus.getMobileNo(),cs.getGender(),cus.getBuilding_No(),cus.getArea_Name(),cus.getPincode(),cus.getPassword());
//		  System.out.println("us: "+bra);
//		   branchDao.save(c);
//		   return c;
//		   }
//		return null;
//	}
	
	@DeleteMapping("/branch/{braid}")
	public void DeleteById(@PathVariable("braid")int id) {
		branchDao.deleteById(id);
	}
}
