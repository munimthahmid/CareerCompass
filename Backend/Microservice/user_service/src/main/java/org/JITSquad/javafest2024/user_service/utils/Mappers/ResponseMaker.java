package org.JITSquad.javafest2024.user_service.utils.Mappers;

import org.JITSquad.javafest2024.user_service.dto.Responses.PageResponse;
import org.springframework.data.domain.Page;

public class ResponseMaker<T> {

    public void makeApplicationResponse(Page<T> page, PageResponse<T> pageResponse) {
        pageResponse.setTotalPages(page.getTotalPages());
        pageResponse.setTotalItems(page.getTotalElements());
        pageResponse.setPageNo(page.getNumber() + 1);
        pageResponse.setHasNext(page.hasNext());
        pageResponse.setHasPrevious(page.hasPrevious());
        pageResponse.setFirst(page.isFirst());
        pageResponse.setLast(page.isLast());
        pageResponse.setData(page.getContent());
    }
}
