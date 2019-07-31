package com.catcode.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.Certificate;

public interface CertificateRepository extends MongoRepository<Certificate, String>{

}
