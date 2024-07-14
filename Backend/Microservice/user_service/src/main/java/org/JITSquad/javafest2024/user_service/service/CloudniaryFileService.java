package org.JITSquad.javafest2024.user_service.service;

import com.cloudinary.Cloudinary;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class CloudniaryFileService {
    private final Cloudinary cloudinary;

    public CloudniaryFileService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public Map upload(MultipartFile file) {
        try {
            return this.cloudinary.uploader().upload(file.getBytes(), Map.of());
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error uploading file with cloudinary");
        }
    }
}
