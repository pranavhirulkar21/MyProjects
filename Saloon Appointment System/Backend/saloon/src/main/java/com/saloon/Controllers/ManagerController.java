package com.saloon.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saloon.daos.ManagerDao;
import com.saloon.entities.Branch;
import com.saloon.entities.Customers;
import com.saloon.entities.Manager;

@CrossOrigin
@RestController
public class ManagerController {

	@Autowired
	private ManagerDao managerDao;

	@GetMapping("/manager")
	public List<Manager> getAllManager() {
		List<Manager> mlist = managerDao.findAll();
		return mlist;
	}

	@PostMapping("/addManager")
	public Manager addManager(@RequestBody Manager man) {
		Manager mandb = managerDao.save(man);
		return mandb;
	}

	@PutMapping("/manager/{manid}")
//	   public Map<String, Object> updateuser(@PathVariable("manid")int id, @RequestBody Manager man){
	public Manager updateuser(@PathVariable("manid") int id, @RequestBody Manager man) {
//		   System.out.println("controller:"+u.toString());
		System.out.println("MID:" + id);
		managerDao.save(man);
		return man;
	}

	@DeleteMapping("/manager/{manid}")
	public void DeleteById(@PathVariable("manid") int id) {
		managerDao.deleteById(id);
	}
}
