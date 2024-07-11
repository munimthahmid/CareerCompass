package org.JITSquad.javafest2024.userService.controller;

import org.JITSquad.javafest2024.userService.service.CloudniaryFileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

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
