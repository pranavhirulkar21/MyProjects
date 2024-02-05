package com.example.saloon_version_0.pojo;

public class ServicesList
{
    private String serviceName;
    private String servicePrice;
    private String serviceDate;

    public ServicesList(String serviceName, String servicePrice, String serviceDate) {
        this.serviceName = serviceName;
        this.servicePrice = servicePrice;
        this.serviceDate = serviceDate;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServicePrice() {
        return servicePrice;
    }

    public void setServicePrice(String servicePrice) {
        this.servicePrice = servicePrice;
    }

    public String getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
    }
}
