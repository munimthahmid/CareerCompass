package org.JITSquad.javafest2024.user_service.controller;

import java.util.Map;
import org.JITSquad.javafest2024.user_service.service.CloudniaryFileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api/file")
public class FileUploadController {
    private final CloudniaryFileService cloudniaryFileService;

    public FileUploadController(CloudniaryFileService cloudniaryFileService) {
        this.cloudniaryFileService = cloudniaryFileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Map> uploadImage(@RequestParam("image") MultipartFile file) {
        Map data = this.cloudniaryFileService.upload(file);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
