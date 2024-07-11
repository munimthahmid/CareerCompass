package org.JITSquad.javafest2024.userService.service;

import com.cloudinary.Cloudinary;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
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
